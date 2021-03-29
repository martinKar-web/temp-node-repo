// npm - global command, comes with Node
// npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependecy - use it in any project
// npm install -g <packageName>
// sudo npm  install -g <packageName> (mac)

// package.json - manifest file (stores inportant info about your project/package).
// you can create it manually (create package.json in the root, create ptoperties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);