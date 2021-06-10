let fs = require("fs");
let input = process.argv.slice(2);

let files = [];
let flags = [];

for (let i = 0; i < input.length; i++) {
  if (input[i].startsWith("-")) {
    flags.push(input[i]);
  } else {
    files.push(input[i]);
  }
}

// console.log(files);
// console.log(flags);

let data = "";
for(let i=0 ; i<files.length ; i++){
    let fileKaData = fs.readFileSync(files[i]);
    data += i == files.length-1 ? fileKaData :  fileKaData+"\n";
}

// console.log(data);

// -s flag

function applySFlag(){
  let datacomp = data.split("\r\n");
  console.log(datacomp);
  let sFlagedData = [];
  let emptyPushed = false;
  for(let i=0 ; i<datacomp.length; i++){
    if(datacomp[i] != ""){
      sFlagedData.push(dataComp[i]);
    }
    else if(datacomp[i] == '' && !emptyPushed) {
      sFlagedData.push(datacomp[i]); I
      emptypushed = true;
    }
}

applySFlag();