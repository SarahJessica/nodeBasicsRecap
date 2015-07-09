var fs = require('fs');

var sallyString = '{ "name" : "Sally"}';

var kelly = {
	name : 'kelly',
	age : 24,
	location : '. '
}

fs.writeFile('sally.json', sallyString);
fs.writeFile('kelly.json', JSON.stringify(kelly));