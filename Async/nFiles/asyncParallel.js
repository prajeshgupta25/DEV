let fs = require("fs");
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];


//Recursion

// function callme(start){
//   if(start==files.length){
//     return;
//   }

//   fs.readFile(files[start] , cb);

//   function cb(error , data){
//       // console.log(error);
//       console.log(data+"");
//   }

//   callme(start+1);
// }

// callme(0);

//Looping

for(let i=0 ; i<files.length ; i++){
    fs.readFile(files[i] , function(err , data){
        console.log(data+"");
    })
}