let fs = require("fs");
let extensions = require("./extensions");

let testfolderpath = "./testfolder";

let content = fs.readdirSync(testfolderpath);

// console.log(content);

for(let i=0; i<content.length; i++){
   let file = content[i];
   testsort(file);
}

function testsort(file){
   let ext = file.split(".")[1];
   let foldername = getfoldername(ext);
   // console.log(ext , foldername);
   let folderpath = testfolderpath + "/" + foldername;
   if(!fs.existsSync(folderpath)){
      fs.mkdirSync(folderpath);
   }
   // move file
   // copy file
   let sourcefilepath = testfolderpath + "/" + file;
   let destfilepath = folderpath + "/" + file;
   fs.copyFileSync( sourcefilepath  , destfilepath );
   // delete file
   fs.unlinkSync(sourcefilepath);
}

function getfoldername(ext){
   let foldername;

   for(let key in extensions){
      if(extensions[key].includes(ext)){
         foldername = key;
         return foldername;
      }
   }
}