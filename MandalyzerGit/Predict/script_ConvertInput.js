fs = require('fs');

InputFileHeaderLength = 54;

let Path = './InputOutputFile/';
InputFileName = Path + 'In.bmp',
OutputFileName = Path + 'Out.bmp'

//============================================================
//brain.js works best with numbers between 0 and 1.
//But BMP works with numbers between 0 and 255
//============================================================
function AdaptNumber(NumberIn, MaxNumber){
    FullNr = (1 / MaxNumber) * NumberIn;
    return FullNr.toFixed(2);
}
//============================================================
var prop = ''

let InputArray = 'let InputArray = [';

buffer = fs.readFileSync(InputFileName);

for(j=InputFileHeaderLength;j<buffer.length;j++) {
	prop = j.toString();
	if(j==buffer.length-1){
		BufferData = AdaptNumber(buffer[prop], 255).toString();
	} else {
		BufferData = AdaptNumber(buffer[prop], 255).toString() + ',';
	}
	InputArray += BufferData;
}

InputArray += '];\n';

fs.writeFileSync("InputArray.js", InputArray, "utf-8");

