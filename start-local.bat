@echo off
setlocal
cd /d "%~dp0"

set "PORT=4173"
echo.
echo  ShineX local network preview
echo  ----------------------------
echo  This computer: http://localhost:%PORT%
echo.
echo  Open one of these URLs on another device connected to the same Wi-Fi:
for /f "tokens=2 delims=:" %%A in ('ipconfig ^| findstr /C:"IPv4 Address"') do (
  for /f "tokens=*" %%B in ("%%A") do echo  http://%%B:%PORT%
)
echo.
echo  Keep this window open while sharing the site.
echo  Press Ctrl+C to stop the server.
echo.
python -m http.server %PORT% --bind 0.0.0.0

endlocal
