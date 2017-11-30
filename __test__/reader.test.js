'use strict';

const reader = require('../lib/reader');

// const paths = [`${__dirname}/../DIRECTIONS.md`, `${__dirname}/../lib/reader.js`, `${__dirname}/../__test__/reader.test.js`];

describe('reader.test.js', () => {
  test('should be 64 char', done => {
    reader.readFile(
      [`${__dirname}/../DIRECTIONS.md`, `${__dirname}/../lib/reader.js`, `${__dirname}/../__test__/reader.test.js`],
      (error, data) => {
        expect(error).toBeNull();
        expect(data.length).toEqual(64);
        done();
      });
  });

  test('should throw error if bad file', done => {
    reader.readFile(
      [`${__dirname}/../less-than-6`, `${__dirname}/../lib/reader.js`, `${__dirname}/../__test__/reader.test.js`],
      (error, data) => {
        expect(error).toBeTruthy();
        expect(data).toBeNull();
        done();
      });
  });

  test('should throw error if not paths', () => {
    reader.readFile(
      'not paths',
      (error, data) => {
        expect(error).toBeTruthy();
        expect(data).toBeNull();
      });
  });
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
