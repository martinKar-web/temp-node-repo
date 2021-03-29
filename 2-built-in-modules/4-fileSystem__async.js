// *asynchronus approach
const {readFile, writeFile} = require('fs');

console.log('start async');

readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return null;
  }
  //console.log(result); // Hello first text file
  const first = result;
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err);
      return null;
    }
    //console.log(result); // Hello second text file
    const second = result;
    writeFile(
      './content/fs-async.txt',
      `${first} then ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return null;
        }
        console.log('done with this task');
      }
    );
  });
});

console.log('starting next task...');