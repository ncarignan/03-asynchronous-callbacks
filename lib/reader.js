'use strict';


const reader = module.exports = {};
const fs = require('fs');

reader.readFile = (paths, callback) => {
  console.log('hi im the reader');
  console.log(callback.toString());
  for(let i=0; i<paths.length; i++){
    fs.readFile(paths[i], (error, data) => {
    // console.log(callback.toString());
      console.log(data.toString('utf-8', 0, 64));
      if(error){callback(error, null);}
      callback(null, data.toString('utf-8', 0, 64));
    });
  // done();
  }
};

// reader.readFile([`${__dirname}/../DIRECTIONS.md`, `${__dirname}/../lib/reader.js`, `${__dirname}/../__test__/reader.test.js`], (error, data) => {
//   console.log(error);
//   console.log(data);
//   console.log('---------------------------------------------');
// });
