import test from "node:test";
import assert from "node:assert/strict";
import {
  saveLeadConversion,
  consumeLeadConversion,
} from "../src/lib/lead-conversion.js";

const event = {
  form_id: "city-offer",
  page_path: "/areas/olathe-ks/",
  page_title: "Sell your Olathe house",
  lead_type: "offer_form",
};
function memory() {
  const values = new Map();
  return {
    values,
    getItem: (k) => values.get(k) ?? null,
    setItem: (k, v) => values.set(k, v),
    removeItem: (k) => values.delete(k),
  };
}

test("a confirmed lead survives navigation, retains the source form, and is consumed once", () => {
  const storage = memory();
  assert.equal(saveLeadConversion(storage, event, 1000), true);
  assert.deepEqual(consumeLeadConversion(storage, 2000), event);
  assert.equal(consumeLeadConversion(storage, 2100), null);
});
test("direct visits, expired, future, and malformed records do not count leads", () => {
  const storage = memory();
  assert.equal(consumeLeadConversion(storage), null);
  for (const now of [1000 + 600001, 999]) {
    saveLeadConversion(storage, event, 1000);
    assert.equal(consumeLeadConversion(storage, now), null);
    assert.equal(storage.values.size, 0);
  }
  for (const record of [
    "bad json",
    JSON.stringify({ createdAt: 1000 }),
    "null",
  ]) {
    storage.setItem("ace_confirmed_lead_v1", record);
    assert.equal(consumeLeadConversion(storage, 2000), null);
    assert.equal(storage.values.size, 0);
  }
});
test("event handoff excludes seller information and tolerates blocked storage", () => {
  const storage = memory();
  saveLeadConversion(
    storage,
    {
      ...event,
      address: "private address",
      email: "seller@example.com",
      phone: "5551234567",
    },
    1000,
  );
  assert.deepEqual(consumeLeadConversion(storage, 2000), event);
  const blocked = {
    setItem() {
      throw Error("blocked");
    },
    getItem() {
      throw Error("blocked");
    },
  };
  assert.equal(saveLeadConversion(blocked, event), false);
  assert.equal(consumeLeadConversion(blocked), null);
  assert.equal(saveLeadConversion(undefined, event), false);
});
