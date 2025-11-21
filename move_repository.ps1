# PowerShell script to move repository from OneDrive to local Desktop
# This script will copy all files from the OneDrive path to the local Desktop path

# Define paths
$sourceDir = "C:\Users\Timothy\OneDrive\Desktop\Earlington_Legacy_Initiative\Earlington_Legacy_Initiative"
$destDir = "C:\Users\Timothy\Desktop\Earlington_Legacy_Initiative"

# Create destination directory if it doesn't exist
if (-not (Test-Path -Path $destDir)) {
    Write-Host "Creating destination directory: $destDir"
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

# Copy all files and folders
Write-Host "Copying files from $sourceDir to $destDir"
Copy-Item -Path "$sourceDir\*" -Destination $destDir -Recurse -Force

# Verify the copy was successful
if (Test-Path -Path "$destDir\index.html") {
    Write-Host "Repository successfully copied to $destDir"
    
    # Optional: Remove the source directory if copy was successful
    # Uncomment the following lines if you want to remove the source after copying
    # Write-Host "Do you want to remove the source directory? (Y/N)"
    # $response = Read-Host
    # if ($response -eq "Y" -or $response -eq "y") {
    #     Remove-Item -Path $sourceDir -Recurse -Force
    #     Write-Host "Source directory removed"
    # }
} else {
    Write-Host "Error: Copy operation failed or incomplete"
}

Write-Host "Done. Press any key to exit."
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")