@echo off
cd /d "%~dp0"
title Midwest AEC data pulls

:menu
cls
echo ==========================================
echo    Midwest AEC - data pulls
echo ==========================================
echo.
echo   1   Search Console + Bing  (queries, pages, rankings)
echo   2   Google index status    (is each page indexed?)
echo   3   Google Trends          (timing and seasons)
echo   4   Cloudflare traffic     (visits and crawlers)
echo   5   IndexNow - send        (tell Bing about changed pages)
echo   6   IndexNow - preview     (show what would be sent)
echo   7   Trends - Midwest year  (12 states, once a year, about 2 hours)
echo.
echo   A   Run 1, 2, 3 and 4 in order
echo   Q   Quit
echo.
set "pick="
set /p "pick=Choose: "

if /i "%pick%"=="1" goto run1
if /i "%pick%"=="2" goto run2
if /i "%pick%"=="3" goto run3
if /i "%pick%"=="4" goto run4
if /i "%pick%"=="5" goto run5
if /i "%pick%"=="6" goto run6
if /i "%pick%"=="7" goto run7
if /i "%pick%"=="A" goto runall
if /i "%pick%"=="Q" goto end
goto menu

:run1
call :s1
goto done
:run2
call :s2
goto done
:run3
call :s3
goto done
:run4
call :s4
goto done
:run5
call :s5
goto done
:run6
call :s6
goto done
:run7
call :s7
goto done
:runall
call :s1
call :s2
call :s3
call :s4
goto done

:s1
echo.
echo === 1: Search Console + Bing ===
node scripts\pull-seo-data.js
if errorlevel 1 echo [Problem reported above]
exit /b

:s2
echo.
echo === 2: Google index status ===
node scripts\pull-index-status.js
if errorlevel 1 echo [Problem reported above]
exit /b

:s3
echo.
echo === 3: Google Trends (takes a few minutes) ===
node scripts\pull-trends.js
if errorlevel 1 echo [Problem reported above]
exit /b

:s4
echo.
echo === 4: Cloudflare traffic ===
node scripts\pull-cloudflare.js
if errorlevel 1 echo [Problem reported above]
exit /b

:s5
echo.
echo === 5: IndexNow - send pages changed in the last 7 days ===
node scripts\submit-indexnow.js
if errorlevel 1 echo [Problem reported above]
exit /b

:s6
echo.
echo === 6: IndexNow - preview only, nothing is sent ===
node scripts\submit-indexnow.js --dry
if errorlevel 1 echo [Problem reported above]
exit /b

:s7
echo.
echo === 7: Google Trends - Midwest yearly pull ===
echo Safe to close and re-run: it continues where it stopped.
node scripts\pull-trends-midwest.js
if errorlevel 1 echo [Problem reported above]
exit /b

:done
echo.
echo Finished. Results are in the data\latest folder.
echo.
pause
goto menu

:end
