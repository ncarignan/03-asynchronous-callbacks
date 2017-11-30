'use strict';

const reader = require('../lib/reader.js');

const paths = [`${__dirname}/../DIRECTIONS.md`, `${__dirname}/../lib/reader.js`, `${__dirname}/../__test__/reader.test.js`];
const callback = (error, data) => {
  expect(error).toBeNull();
  expect(data).toEqual('something with 64 characters');
  // done();
};

describe('reader.test.js', () => {
  test('should be 64 char'), () => {
    reader.readFile(paths, callback);
  };
}
);
