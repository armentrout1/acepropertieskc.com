import test from "node:test";
import assert from "node:assert/strict";
import {
  captureAttribution,
  ATTRIBUTION_KEY,
  ATTRIBUTION_TTL_MS,
} from "../src/lib/lead-attribution.js";

function memory() {
  const values = new Map();
  return {
    getItem: (key) => values.get(key),
    setItem: (key, value) => values.set(key, value),
  };
}
test("keeps first campaign and entry across a page without a form and internal navigation", () => {
  const storage = memory();
  const entry = captureAttribution({
    href: "https://acepropertieskc.com/resources/?utm_source=google&utm_medium=cpc&utm_campaign=as-is&gclid=click123&email=private@example.com#details",
    referrer: "https://www.google.com/search?q=private",
    storage,
    now: 1000,
  });
  const later = captureAttribution({
    href: "https://acepropertieskc.com/get-offer/?utm_source=internal",
    referrer: "https://acepropertieskc.com/resources/",
    storage,
    now: 2000,
  });
  assert.deepEqual(later, entry);
  assert.equal(later.landing_page, "https://acepropertieskc.com/resources/");
  assert.equal(later.utm_source, "google");
  assert.equal(later.gclid, "click123");
  assert.equal(later.referrer, "https://www.google.com/search");
  assert.ok(!storage.getItem(ATTRIBUTION_KEY).includes("private"));
});
test("starts a new entry after inactivity and ignores an internal referrer", () => {
  const storage = memory();
  captureAttribution({
    href: "https://acepropertieskc.com/?utm_source=first",
    storage,
    now: 1000,
  });
  const entry = captureAttribution({
    href: "https://acepropertieskc.com/about/?utm_source=second",
    referrer: "https://acepropertieskc.com/",
    storage,
    now: ATTRIBUTION_TTL_MS + 1001,
  });
  assert.equal(entry.utm_source, "second");
  assert.equal(entry.referrer, "");
});
test("works with unavailable or corrupted storage", () => {
  const broken = {
    getItem() {
      throw Error("blocked");
    },
    setItem() {
      throw Error("blocked");
    },
  };
  for (const storage of [
    undefined,
    broken,
    { getItem: () => "{bad", setItem() {} },
  ]) {
    const entry = captureAttribution({
      href: "https://acepropertieskc.com/?utm_source=test",
      storage,
    });
    assert.equal(entry.utm_source, "test");
  }
});
test("rejects future timestamps and malformed or foreign stored entries", () => {
  for (const mutate of [
    (saved) => {
      saved.last_seen_at = 5000;
    },
    (saved) => {
      saved.entry.utm_source = 123;
    },
    (saved) => {
      saved.entry.landing_page = "https://other.example/";
    },
  ]) {
    const storage = memory();
    captureAttribution({
      href: "https://acepropertieskc.com/?utm_source=old",
      storage,
      now: 1000,
    });
    const saved = JSON.parse(storage.getItem(ATTRIBUTION_KEY));
    mutate(saved);
    storage.setItem(ATTRIBUTION_KEY, JSON.stringify(saved));
    assert.equal(
      captureAttribution({
        href: "https://acepropertieskc.com/?utm_source=new",
        storage,
        now: 2000,
      }).utm_source,
      "new",
    );
  }
});
