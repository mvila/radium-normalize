var fs = require('fs');
var path = require('path');
var convertCss = require('css-to-radium');

var cssPath = path.join(__dirname, 'node_modules', 'normalize.css', 'normalize.css');
var css = fs.readFileSync(cssPath, 'utf8');
var json = JSON.stringify(convertCss(css), null, 2);
var jsonPath = path.join(__dirname, 'normalize.json');
fs.writeFileSync(jsonPath, json);
