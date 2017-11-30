'use strict';


const reader = module.exports = {};
const fs = require('fs');

reader.readFile = (paths, callback) => {
  for(let i=0; i<paths.length; i++){
    fs.readFile(paths[i], (error, data) => {
      if(error){callback(error, null);}
      else{callback(null, data.toString('utf-8', 0, 64));}
    });
  }
};
