const addModule = require('./add');
const logModule = require('./logger');
const fs = require('fs');

const addFn = addModule.add;
const logFn = logModule.logger;
const subFn = logModule.sub;

console.log(addFn(2,3));

logFn(addFn(10,20));
logFn(subFn(100,20));

f = fs.readFileSync('./file.txt', 'utf8');
logFn(f);

fs.readFile('./file.txt', 'utf8', function(err, file) {
    console.log(file);
});