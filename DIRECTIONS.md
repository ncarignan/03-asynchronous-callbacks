
## Submission Instructions
* Work in a fork of this repository
* Work in a branch on your fork
* Write all of your code in a directory named `lab-` + `<your name>` **e.g.** `lab-susan`
* Open a pull request to this repository
* Submit on canvas a question and observation, how long you spent, and a link to your pull request

## Resources  
  * [fs module docs](https://nodejs.org/api/fs.html)

## Configuration
Configure the root of your repository with the following files and directories. Thoughtfully name and organize any aditional configuration or module files.
* **README.md** - contains documentation
* **.gitignore** - contains a [robust](http://gitignore.io) `.gitignore` file
* **.eslintrc.json** - contains the course linter configuration
* **.eslintignore** - contains the course linter ignore configuration
* **package.json** - contains npm package config
  * create a `lint` script for running eslint
  * create a `test` script for running tests
* **lib/** - contains module definitions
* **assets/** - contains the text files used by the program
* **\_\_test\_\_/** - contains unit tests

## Feature Tasks  
#### Reader Module
In the lib/ directory create a reader.js module that exports a single function. The reader module should take an array of three file paths and resolve a mapped array of strings loaded from each file using an error-first callback. The string data should be in the same order as the file path data (mapped). If an error occurs it should immediately reject the error using the callback and stop execution.

* The reader module should have the function signature `(paths, callback) => undefined`
* On a failure the reader module should invoke the callback with an error `callback(error)`
* On success the reader module should invoke the callback with null as the first parameter, and the result as the second parameter `callback(null, result)`

## Testing  
#### Reader Module Tests
* Use TDD `describe` and `test` methods to define descriptive tests
* Each `test` callback should aim to test a small well defined feature of a function
* Write tests to ensure the reader function rejects errors with invalid file paths
* Write tests to ensure the reader function correctly resolves mapped string data for an array of file paths

## Bonus 1pt
Write the reader function recursively so that it will be able to support 0 or more paths.

##  Documentation
In your README.md describe the exported values of each module you have defined. Every function description should include it's arity (expected number of parameters), the expected data for each parameter (data-type and limitations), and it's behavior (for both valid and invalid use). Feel free to write any additional information in your README.md.
