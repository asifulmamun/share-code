@echo off
del /s /f /q c:\windows\temp\*.*
rd /s /q c:\windows\temp
md c:\windows\temp
del /s /f /q C:\WINDOWS\Prefetch
del /s /f /q %temp%\*.*
rd /s /q %temp%
md %temp%
del /s /f /q C:\Users\asifulmamun\Downloads\*.*
rd /s /q C:\Users\asifulmamun\Downloads
md C:\Users\asifulmamun\Downloads
del /s /f /q C:\Users\asifulmamun\Documents\*.*
rd /s /q C:\Users\asifulmamun\Documents
md C:\Users\asifulmamun\Documents
del /s /f /q C:\Users\asifulmamun\Desktop\*.jpg
del /s /f /q C:\Users\asifulmamun\Desktop\*.png
del /s /f /q C:\Users\asifulmamun\Desktop\*.pdf
del /s /f /q C:\Users\asifulmamun\Desktop\*.doc
del /s /f /q C:\Users\asifulmamun\Desktop\*.docx
deltree /y c:\windows\tempor~1
deltree /y c:\windows\temp
deltree /y c:\windows\tmp
deltree /y c:\windows\ff*.tmp
deltree /y c:\windows\history
deltree /y c:\windows\cookies
deltree /y c:\windows\recent
deltree /y c:\windows\spool\printers
del c:\WIN386.SWP
cls
