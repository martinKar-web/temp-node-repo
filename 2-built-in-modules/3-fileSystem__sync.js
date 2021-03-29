//* asynchronus approach

const {readFileSync, writeFileSync} = require('fs');
console.log('start');
// readFileSync('path', 'encoding')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first);
//console.log(second);

// writeFileSync creates a new file
// create a new file 'myfile.txt' in the content folder
//writeFileSync(
//  './content/myfile.txt',
//  `Here is the result: ${first}, ${second}`
//);

// if you want to append to the file
writeFileSync(
  './content/fs-sync.txt',
  `Here is the result: ${first}, ${second}`,
  {flag: 'a'}
);
console.log('done with this task');
console.log('starting the next one...');