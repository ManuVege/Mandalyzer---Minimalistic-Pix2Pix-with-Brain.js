fs = require('fs');

//BMP standard Header
InputFileHeaderLength = 54;

TrainDataDeclare = 'let traindata = ['
TrainDataInput = '{input:['
TrainDataOutput = '], output:['
TrainDataOutputEnd = ']}, '
TrainDataOutputLastEnd = ']}];'


let InputPath = './TrainingSet/Inputs/';
let OutputPath = './TrainingSet/Outputs/';
let InputFileNameArray = [];
let OutputFileNameArray = [];

InputFileNameArray = DirInToArray(InputPath);
OutputFileNameArray = DirInToArray(OutputPath);

//Create an array with the file names of a given Path
function DirInToArray(DirPath) {
    var FileArray = new Array;

    var fs = require('fs'),
        files = fs.readdirSync(DirPath);

    files.forEach(function(file) {
        FileArray.push(DirPath + file);
    })
    return FileArray;
}

//============================================================
//brain.js works best with numbers between 0 and 1.
//But BMP works with numbers between 0 and 255
//This function work like this examples, 0=0 255=1 127=0.5
//============================================================
function AdaptNumber(NumberIn, MaxNumber){
    AdaptedNumber = (1 / MaxNumber) * NumberIn;
    rounded = Math.round(AdaptedNumber * 100) / 100;
    return rounded;
}
var prop = ''


//CreateTrainingSet
let FullCreateTrainingSet = TrainDataDeclare;

let BuffersArray = [];


//Here is where all files are compiled into FullTrainingSet.js
for(i=0;i<InputFileNameArray.length;i++){
	console.log("IN");
	console.log(InputFileNameArray[i]);

    FullCreateTrainingSet += TrainDataInput;



    buffer = fs.readFileSync(InputFileNameArray[i]);

    //For each byte of the buffer [IN]
	for(j=InputFileHeaderLength;j<buffer.length;j++) {
        prop = j.toString();
		if(j==buffer.length-1){
			BufferData = AdaptNumber(buffer[prop], 255).toString();

		} else {
			BufferData = AdaptNumber(buffer[prop], 255).toString() + ',';
		}
    	FullCreateTrainingSet += BufferData;
    }

//************************************************************
	console.log("OUT");
	console.log(OutputFileNameArray[i]);

    FullCreateTrainingSet += TrainDataOutput;



    buffer = fs.readFileSync(OutputFileNameArray[i]);

    //For each byte of the buffer [OUT]
	for (j=InputFileHeaderLength;j<buffer.length;j++) {
        prop = j.toString();
		if(j==buffer.length-1){
			BufferData = AdaptNumber(buffer[prop], 255).toString();
		} else {
			BufferData = AdaptNumber(buffer[prop], 255).toString() + ',';
		}
    	FullCreateTrainingSet += BufferData;
    }


	if(i<InputFileNameArray.length-1){
        FullCreateTrainingSet += TrainDataOutputEnd
    }
}

FullCreateTrainingSet += TrainDataOutputLastEnd

//Save the FullTrainingSet.js
fs.writeFileSync("FullTrainingSet.js", FullCreateTrainingSet, "utf-8");
console.log('END');
