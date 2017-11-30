'use strict';


const reader = module.exports = {};
const fs = require('fs');

reader.readFile = (paths, callback) => {
  for(let i=0; i<paths.length; i++){
    fs.readFile(paths[i], (error,data) => {
      if(error)
        callback(error);
      callback(null, data.toString('utf-8', 0, 64));
    });
  }
};

// //wrong way
// fileReader.readFileWrong = () => {
//   let bigFilePath = `${__dirname}/../data/big-document.txt`;
//   fs.readFile(bigFilePath, (error,data) => {
//     if(error)
//       return error;
//     return data.toString('utf-8', 0, 64);
//   });
//   //this executes immediately
// };


// const fileReader = module.exports = {};
// const fs = require('fs');
//
//
// //right way
// fileReader.readFile = (callback) => {
//   let bigFilePath = `${__dirname}/../data/big-document.txt`;
//   fs.readFile(bigFilePath, (error,data) => {
//     if(error)
//       callback(error);
//     callback(null, data.toString('utf-8', 0, 64));
//   });
// };
