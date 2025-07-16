@echo off
cd /d %~dp0
echo Iniciando Painel DreamBot...
call npm install
call npm run dev
pause
