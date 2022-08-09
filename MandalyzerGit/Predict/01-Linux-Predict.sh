rm InputArray.js
node script_ConvertInput.js

rm script.js
rm network_state.js

cd InputOutputFile
rm Out.tmp
rm Out.bmp
cd ..

cat network_state.add network_state.json > network_state.js
cat InputArray.js network_state.js script_go.js > script.js
node script.js

cd InputOutputFile
cat header_bmp.hdr Out.tmp > Out.bmp
rm Out.tmp

echo End of script
read Pause2

