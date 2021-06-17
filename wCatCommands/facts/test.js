let fs = require("fs");

let input = process.argv.slice(2);

let flags = [];
let files = [];

for(let i=0; i<input.length; i++){
   if(input[i].startsWith("-")){
      flags.push(input[i]);
   }else{
      files.push(input[i]);
   }
}

console.log(files);
console.log(flags);

let data = "";

for(let i=0; i<files.length;i++){
   let filekadata = fs.readFileSync(files[i]);
   data += filekadata;
}

// console.log(data);
