# Copies every article in content\rewrite into content\published\<catSlug>\
# and removes the 9 backlog originals that were rewritten. Run from anywhere.
$root = "C:\Users\Dylen\Desktop\AEC\Midwest\content"
Get-ChildItem "$root\rewrite\*.md" | ForEach-Object {
  $cat = (Select-String -Path $_.FullName -Pattern '^catSlug:\s*"(.+)"' | Select-Object -First 1).Matches.Groups[1].Value
  if (-not $cat) { Write-Host "SKIP (no catSlug): $($_.Name)"; return }
  $dest = "$root\published\$cat"
  New-Item -ItemType Directory -Force -Path $dest | Out-Null
  Copy-Item $_.FullName -Destination $dest -Force
  Write-Host "$($_.Name) -> published\$cat"
}
$done = "emergency-ice-dam-steaming-vs-roof-hacking","roof-heat-tape-deicing-cables","sump-pump-freeze-relief-iceguard","submersible-well-pump-freeze-failure","interior-window-condensation-winter","bathroom-exhaust-fan-attic-condensation","kneewall-attic-air-sealing-insulation","mini-split-defrost-pan-heater-freezing","standby-generator-cold-weather-sizing"
foreach ($s in $done) { Remove-Item "$root\backlog\$s.md" -ErrorAction SilentlyContinue }
Write-Host "Done. Now build and push."
