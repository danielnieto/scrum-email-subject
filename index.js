#!/usr/bin/env node

const dateformat = require('dateformat');
const clipboardy = require('clipboardy');

const str = `[SCRUM] PLACEIT - ${dateformat(new Date(), 'dddd mmmm dS yyyy')}`
clipboardy.writeSync(str);
console.log(`'${str}' has been copied to your clipboard`)