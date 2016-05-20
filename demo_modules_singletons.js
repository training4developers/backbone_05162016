'use strict';

const myModule1 = require('./my-module');

myModule1.setValue('Aaron');

const myModule2 = require('./my-module');

console.log(myModule2.getValue());
