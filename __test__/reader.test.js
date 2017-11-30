'use strict';

const reader = require('../lib/reader');

// const paths = [`${__dirname}/../DIRECTIONS.md`, `${__dirname}/../lib/reader.js`, `${__dirname}/../__test__/reader.test.js`];

describe('reader.test.js', () => {
  test('should be 64 char', () => {
    reader.readFile(
      [`${__dirname}/../DIRECTIONS.md`, `${__dirname}/../lib/reader.js`, `${__dirname}/../__test__/reader.test.js`],
      (error, data) => {
        expect(error).toBeNull();
        expect(error).toBe(64);
        expect(data.length).toEqual(64);
        done();
      });
  });
  // test('should fail if not 64 char', () => {
  //   reader.readFile(paths,(error, data) => {
  //     expect(error).toBeNull();
  //     expect(data).toEqual('something with 64 characters');
  //     done();
  //   });
  // });
});
// describe('file-reader.test.js', () => {
//   test('should be 64 char', () => {
//     fileReader.readFile((error, data) => {
//       expect(error).toBeNull();
//       expect(data).toEqual('something with 64 characters');
//       done();
//     });
//   });
// });
