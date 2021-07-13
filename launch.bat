@echo off
@title Lidium Server Console
set CLASSPATH=.;dist\pims111.jar;lib\*
java -server -Dnet.sf.odinms.wzpath=wz\ server.Start
pause