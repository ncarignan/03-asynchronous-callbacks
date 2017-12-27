'use strict';


const reader = module.exports = {};
const fs = require('fs');

reader.readFiles = (paths, callback) => {
  let results = [];
  function readFilesRecursively(){
    if(paths.length === 0)
      callback(null, results);
    else
      fs.readFile(paths.shift(), (error,data) => {
        if(error){
          callback(error, null);
          return;
        }

        results.push(data.toString('utf-8', 0, 5));
        readFilesRecursively();
      });
  }

  readFilesRecursively();
};
