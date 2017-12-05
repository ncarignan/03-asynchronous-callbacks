# Lab 03

## exports

###reader
reader exports four customized functions that affect arrays
####reader.readFile
takes in an array of paths and a callback function, and returns an array stringified files. it also catches errors and returns a descriptive error message
####reader.readFiles
takes in an array of paths and a callback function, and returns an array stringified files. it also catches errors and returns a descriptive error message. The files will stay arranged as they come in because of the recursive nature of the function.
#### NOTES
I am now in the process of refactoring to recursive functions and fixing my original functionality. The readFiles function is structured like the one during code review, I intend to improve on my testing.
