del InputArray.js
node script_ConvertInput.js

del script.js
del network_state.js

cd InputOutputFile
del Out.tmp
del Out.bmp
cd ..

copy /B network_state.add + network_state.json network_state.js
copy /B InputArray.js + network_state.js + script_go.js script.js
node script.js


cd InputOutputFile
copy /B header_bmp.hdr + Out.tmp Out.bmp
del Out.tmp

echo End of script
pause

