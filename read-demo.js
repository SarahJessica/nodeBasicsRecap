var fs = require('fs');
var data = require('./data1.json');

console.log(data);

fs.readFile('./data1.json', 'utf-8', function(err, data){
	
	console.log(data);
});