# Express.js 404 Error Handling with sendFile
This repository demonstrates a common error in Express.js applications when using `res.sendFile()` without proper error handling.  The bug occurs when the specified file does not exist, resulting in a 404 error.
The solution demonstrates how to handle this by using a `try...catch` block to gracefully handle file system errors and send an appropriate response to the client.
## Bug
The `bug.js` file contains the problematic code that throws a 404 error when attempting to send a file that does not exist.
## Solution
The `bugSolution.js` file provides a corrected version with error handling implemented to prevent the 404 error.