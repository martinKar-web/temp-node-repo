const path = require('path');

// path seperator
//console.log(path.sep);

const filePath = path.join('/content', 'sub-folder', 'test.txt');
//console.log(filePath); // \content\sub-folder\test.txt

const base = path.basename(filePath); // text.txt
//console.log(base);

// path.resolve retuns an absolute path
const absolute = path.resolve(
  __dirname,
  'content',
  'subfolder',
  'test.txt'
);
console.log(absolute);
