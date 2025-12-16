<#
Safe cleanup script: moves duplicate/nested `Earlington_Legacy_Initiative` folder
and common backup files into `duplicates/` with a timestamp so you can review
before permanently deleting anything.

Usage:
  powershell -ExecutionPolicy Bypass -File .\scripts\cleanup_duplicates.ps1
#>

$root = (Get-Location).Path
$timestamp = Get-Date -Format 'yyyyMMdd_HHmmss'
$duplicatesDir = Join-Path $root ("duplicates\Earlington_Legacy_Initiative_backup_$timestamp")

function Ensure-Dir([string]$path) {
    if (-not (Test-Path $path)) {
        New-Item -ItemType Directory -Path $path -Force | Out-Null
    }
}

Write-Host "Repository root: $root"
Ensure-Dir $duplicatesDir

# Move nested duplicate folder if it exists
$nested = Join-Path $root 'Earlington_Legacy_Initiative'
if (Test-Path $nested) {
    $dest = Join-Path $duplicatesDir 'Earlington_Legacy_Initiative'
    Ensure-Dir (Split-Path $dest)
    Write-Host "Moving nested folder:`n  $nested`n -> $dest"
    try {
        Move-Item -Path $nested -Destination $dest -Force
        Write-Host "Moved nested folder to $dest"
    } catch {
        Write-Host "Failed to move nested folder: $_" -ForegroundColor Red
    }
} else {
    Write-Host "No nested folder 'Earlington_Legacy_Initiative' found."
}

# Move common backup/duplicate files from repo root into duplicates dir
$patterns = @('index.html.backup','*.backup','vite.config.ts.timestamp-*.mjs')
foreach ($p in $patterns) {
    $matches = Get-ChildItem -Path $root -Filter $p -File -ErrorAction SilentlyContinue
    foreach ($f in $matches) {
        $destFile = Join-Path $duplicatesDir $f.Name
        Write-Host "Moving file: $($f.FullName)`n -> $destFile"
        try {
            Move-Item -Path $f.FullName -Destination $destFile -Force
        } catch {
            Write-Host "Failed to move $($f.FullName): $_" -ForegroundColor Yellow
        }
    }
}

Write-Host "Cleanup script finished. Review the moved items in:`n  $duplicatesDir"
Write-Host "After review, you can delete or restore items as needed."
