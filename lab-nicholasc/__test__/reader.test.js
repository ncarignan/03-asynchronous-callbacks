'use strict';

const reader = require('../lib/reader');

describe('reader.test.js', () => {
  test('should be 64 char', done => {
    reader.readFiles(
      [
        `${__dirname}/../assets/mario.txt`,
        `${__dirname}/../assets/peach.txt`,
        `${__dirname}/../assets/luigi.txt`,
      ],
      (error, data) => {
        expect(error).toBeNull();
        expect(data[0].length).toEqual(5);
        done();
      });
  });

  test('should throw error if bad file', done => {
    reader.readFiles(
      [`${__dirname}/../assets/luig.bad`, `${__dirname}/../assets/mario.txt`, `${__dirname}/../assets/peach.txt`],
      (error, data) => {
        expect(error).toBeTruthy();
        done();
      });
  });

  test('file contents should be returned in order based on input array', done => {
    let filePaths = [
      `${__dirname}/../assets/mario.txt`,
      `${__dirname}/../assets/peach.txt`,
      `${__dirname}/../assets/luigi.txt`,
    ];
    reader.readFiles(filePaths, (error,data) => {
      expect(data[0]).toEqual('mario');
      expect(data[1]).toEqual('peach');
      expect(data[2]).toEqual('luigi');
      done();
    });
  });
});
