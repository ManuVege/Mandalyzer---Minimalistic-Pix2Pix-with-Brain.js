const brain = require('brain.js');

traindataIL = traindata[0]["input"].length;
traindataOL = traindata[0]["output"].length;
console.log('Input Length');
console.log(traindataIL);
console.log('Output Length');
console.log(traindataOL);

//================================================================
//NEURAL NETWORK CONFIGURATION 
//================================================================
const nnConfig = {
	binaryThresh: 0.5,
	hiddenLayers: [64],
	activation: "sigmoid",
	decayRate: 0.001
}


console.log('\nStart Training...\n');
//Create the Network
const network = new brain.NeuralNetwork(nnConfig);
//================================================================
//TRAINING CONFIGURATION 
//================================================================
const trainingOptions = {
    learningRate: 0.0001,
    momentum: 0.3,
    log: true,
    logPeriod: 10,
    log: (stats) => console.log(stats),
    iterations: 60000,
    errorThresh: 0.004
};



//Train the Network
network.train(traindata, trainingOptions);


//=========================================================
//SAVE TRAINED NETWORK
//=========================================================

fs = require('fs');
const networkState = network.toJSON();
fs.writeFileSync("network_state.json",  JSON.stringify(networkState), "utf-8");

