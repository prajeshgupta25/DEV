let fs = require("fs");
let files = ["../f1.txt" , "../f2.txt" , "../f3.txt"];

function callme(start){
  if(start==files.length){
    return;
  }

  fs.readFile(files[start] , cb);

  function cb(error , data){
      // console.log(error);
      console.log(data+"");
  }

  callme(start+1);
}

callme(0);