$pages = @(
    @{Path='/'; Name='homepage'},
    @{Path='/areas/64131/'; Name='area-64131'},
    @{Path='/areas/kansas-city-mo/'; Name='area-kansas-city-mo'},
    @{Path='/areas/overland-park-ks/'; Name='area-overland-park-ks'},
    @{Path='/areas/olathe-ks/'; Name='area-olathe-ks'},
    @{Path='/areas/independence-mo/'; Name='area-independence-mo'},
    @{Path='/areas/lees-summit-mo/'; Name='area-lees-summit-mo'},
    @{Path='/areas/shawnee-ks/'; Name='area-shawnee-ks'},
    @{Path='/areas/lenexa-ks/'; Name='area-lenexa-ks'},
    @{Path='/solutions/inherited-house/'; Name='solution-inherited-house'},
    @{Path='/solutions/needs-repairs/'; Name='solution-needs-repairs'},
    @{Path='/solutions/behind-on-payments/'; Name='solution-behind-on-payments'},
    @{Path='/solutions/probate-house/'; Name='solution-probate-house'},
    @{Path='/solutions/vacant-house/'; Name='solution-vacant-house'},
    @{Path='/solutions/relocating/'; Name='solution-relocating'},
    @{Path='/solutions/sell-house-fast/'; Name='solution-sell-house-fast'},
    @{Path='/solutions/divorce/'; Name='solution-divorce'}
)

$results = @()

foreach ($page in $pages) {
    try {
        $response = Invoke-WebRequest -Uri "http://localhost:4321$($page.Path)" -UseBasicParsing
        $html = $response.Content
        
        # Extract FAQPage JSON-LD
        if ($html -match '"@type":"FAQPage"[^}]+mainEntity":\[([^\]]+)\]') {
            $faqBlock = $matches[0]
            
            # Count Questions
            $questionCount = ([regex]::Matches($faqBlock, '"@type":"Question"')).Count
            
            # Check for name fields
            $nameCount = ([regex]::Matches($faqBlock, '"name":"[^"]+')).Count
            
            # Check for text fields in Answer
            $textCount = ([regex]::Matches($faqBlock, '"text":"[^"]+')).Count
            
            # Extract first question as sample
            if ($faqBlock -match '\{"@type":"Question","name":"([^"]+)","acceptedAnswer":\{"@type":"Answer","text":"([^"]+)"\}\}') {
                $sampleQuestion = $matches[1]
                $sampleAnswer = $matches[2]
            } else {
                $sampleQuestion = "PARSE_ERROR"
                $sampleAnswer = "PARSE_ERROR"
            }
            
            $valid = ($questionCount -eq $nameCount) -and ($questionCount -eq $textCount) -and ($questionCount -gt 0)
            
            $results += [PSCustomObject]@{
                Page = $page.Name
                Path = $page.Path
                Valid = $valid
                Questions = $questionCount
                HasName = $nameCount
                HasText = $textCount
                SampleQ = $sampleQuestion.Substring(0, [Math]::Min(50, $sampleQuestion.Length))
                SampleA = $sampleAnswer.Substring(0, [Math]::Min(50, $sampleAnswer.Length))
            }
        } else {
            $results += [PSCustomObject]@{
                Page = $page.Name
                Path = $page.Path
                Valid = $false
                Questions = 0
                HasName = 0
                HasText = 0
                SampleQ = "NO_FAQ_SCHEMA_FOUND"
                SampleA = "NO_FAQ_SCHEMA_FOUND"
            }
        }
    } catch {
        $results += [PSCustomObject]@{
            Page = $page.Name
            Path = $page.Path
            Valid = $false
            Questions = 0
            HasName = 0
            HasText = 0
            SampleQ = "ERROR: $($_.Exception.Message)"
            SampleA = ""
        }
    }
}

Write-Host "`n=== FAQ SCHEMA VALIDATION RESULTS ===" -ForegroundColor Cyan
Write-Host "Total Pages Checked: $($results.Count)" -ForegroundColor Cyan
Write-Host ""

$validCount = ($results | Where-Object { $_.Valid -eq $true }).Count
$invalidCount = ($results | Where-Object { $_.Valid -eq $false }).Count

foreach ($result in $results) {
    if ($result.Valid) {
        Write-Host "✓ PASS: $($result.Page)" -ForegroundColor Green
        Write-Host "  Questions: $($result.Questions) | Name fields: $($result.HasName) | Text fields: $($result.HasText)" -ForegroundColor Gray
    } else {
        Write-Host "✗ FAIL: $($result.Page)" -ForegroundColor Red
        Write-Host "  Questions: $($result.Questions) | Name fields: $($result.HasName) | Text fields: $($result.HasText)" -ForegroundColor Gray
        Write-Host "  Issue: $($result.SampleQ)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "=== SUMMARY ===" -ForegroundColor Cyan
Write-Host "Valid: $validCount" -ForegroundColor Green
Write-Host "Invalid: $invalidCount" -ForegroundColor Red

if ($invalidCount -eq 0) {
    Write-Host "`n✓ ALL PAGES PASS - SAFE TO DEPLOY" -ForegroundColor Green
    exit 0
} else {
    Write-Host "`n✗ SOME PAGES FAIL - DO NOT DEPLOY" -ForegroundColor Red
    exit 1
}
