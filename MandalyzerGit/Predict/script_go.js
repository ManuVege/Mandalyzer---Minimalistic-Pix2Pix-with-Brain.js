//Predict Script
const brain = require('brain.js');
fs = require('fs');


// Create a Neural Network
const network = new brain.NeuralNetwork();


//Load the Network from network_state.json
network.fromJSON(TrainedData);

let iBinary = '';


//Run the Network (InputArray is stored on InputArray.js)
result = network.run(InputArray);
ArrayToFile(result, "./InputOutputFile/Out.tmp");


//Save the Output
function ArrayToFile(iArray, iFileName){
	for(i=0;i<iArray.length;i++){
        iArray[i] = Math.round(255 * iArray[i]);
        iBinary += String.fromCharCode(iArray[i]);
	}
	fs.writeFileSync(iFileName,  iBinary, 'binary');

    console.log('Input Length');
    console.log(InputArray.length);
    console.log('Output Length');
    console.log(iBinary.length);
}


