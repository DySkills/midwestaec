# organize-scripts.ps1
# Sorts the scripts folder. Nothing is deleted: one-off scripts are MOVED into scripts\archive\.
# Run from the Midwest folder in PowerShell:
#   powershell -ExecutionPolicy Bypass -File .\organize-scripts.ps1          (do it)
#   powershell -ExecutionPolicy Bypass -File .\organize-scripts.ps1 -Undo    (put everything back)
# A list of every move is saved to scripts\archive\_moves.csv.

param([switch]$Undo)

$root = $PSScriptRoot
$scripts = Join-Path $root 'scripts'
$archive = Join-Path $scripts 'archive'
$log = Join-Path $archive '_moves.csv'

$groups = [ordered]@{
  'content-batches' = @(
    'apply_batch1_precise.js','apply_batch2_section_replace.js','apply-trademark.js',
    'execute_batch1_forensic.js','execute_batch2_capital.js','execute_batch3_and_promote_winter.js','execute_batch3_compliance.js',
    'update_cluster1_roofing.js','update_cluster2_basements.js','update_cluster3_crawlspace_seasonal.js','update_cluster4_windows.js',
    'update_cluster5_historic.js','update_cluster6_hvac_vent.js','update_cluster7_green_alt.js','update_cluster8_insulation.js',
    'update_focus_articles.js','update-all-snippets.js','fix_false_spring.js',
    'inject_barndominium_link.js','inject_contextual_links.js','inject_remaining_links.js','inject_roof_link.js',
    'clean_the_bullets.js','clean_zones_all.js','finish_em_dash_cleanup.js','humanize_copy.js',
    'replace_zone_jargon.js','remove_network_bar.js'
  )
  'audits-and-checks' = @(
    'audit_34_articles.js','audit_action1_complete.js','audit_inventory.js','audit_more_queries.js',
    'audit_surge_duration.js','audit_winter_surges.js','check_batch3_openings.js','check_false_spring.js',
    'check_sips.js','check_title_zones.js','inspect_batch1.js','inspect_batch2_3.js','inspect-urls.js',
    'list_remaining.js','list-features.js','read_intros.js','scan_ai_marks.js','verify_archetypes.js'
  )
  'old-data-pulls' = @(
    'fetch-bing.js','fetch-pages.js','fetch-queries.js','gsc-full-report.js','find-opportunities.js',
    'query-trends.js','seasonal-radar.js','daily-tuning.js','telemetry-audit.js','test-gsc.js'
  )
}

if ($Undo) {
  if (-not (Test-Path $log)) { Write-Host 'Nothing to undo (no move log found).'; exit }
  Import-Csv $log | ForEach-Object {
    $from = Join-Path $root $_.to
    $to = Join-Path $root $_.from
    if (Test-Path $from) { Move-Item -LiteralPath $from -Destination $to; Write-Host "restored $($_.from)" }
  }
  Write-Host 'Done. Files are back where they were.'
  exit
}

$moves = @()
foreach ($g in $groups.Keys) {
  $dest = Join-Path $archive $g
  New-Item -ItemType Directory -Force -Path $dest | Out-Null
  foreach ($f in $groups[$g]) {
    $src = Join-Path $scripts $f
    if (Test-Path $src) {
      Move-Item -LiteralPath $src -Destination (Join-Path $dest $f)
      $moves += [pscustomobject]@{ from = "scripts\$f"; to = "scripts\archive\$g\$f" }
      Write-Host "archived $f -> $g"
    }
  }
}
if ($moves.Count) {
  if (Test-Path $log) { $moves = @(Import-Csv $log) + $moves }
  $moves | Export-Csv -NoTypeInformation -Path $log
}
Write-Host ''
Write-Host 'Still in scripts\ (the active ones):'
Get-ChildItem $scripts -File | ForEach-Object { Write-Host "  $($_.Name)" }
