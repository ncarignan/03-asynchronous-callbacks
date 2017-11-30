'use strict';


const reader = module.exports = {};
const fs = require('fs');

// reader.readFile = (paths, callback) => {
//   for(let i=0; i<paths.length; i++){
//     fs.readFile(paths[i], (error, data) => {
//       if(error){callback(error, null);}
//       else{callback(null, data.toString('utf-8', 0, 64));}
//     });
//   }
// };

reader.readFiles = (paths, callback) => {
  let results = [];

  function readFilesRecursively(){
    if(paths.length === 0)
      callback(null, results);
    else
      fs.readFile(paths.shift(), (error,data) => {
        //inside this callback returns a file or error
        if(error){
          callback(error);
          return;
        }

        results.push(data.toString('utf-8', 0, 5));
        readFilesRecursively();
      });
  }

  readFilesRecursively();
};
