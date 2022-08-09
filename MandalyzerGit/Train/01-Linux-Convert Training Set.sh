echo This Script will delete FullTrainingSet.js and create a new one.
read Pause1

rm FullTrainingSet.js
node script_ConvertTrainSet.js

echo End of script
read Pause2
