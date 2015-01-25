/*var line  = process.argv
var sum = 0
for(var i =2; i< line.length; i++){
	sum+= Number(line[i])
}
console.log(sum)*/

/*var fs = require('fs')
var buffer  = fs.readFileSync(process.argv[2])
var string = buffer.toString();
console.log(string.split('\n').length-1)*/


/*var fs = require('fs')
fs.readFile(process.argv[2], function countlines(err, data){
	var string = data.toString();
	console.log(string.split('\n').length - 1)
})*/

var fs = require('fs')
var path = require('path')
fs.readdir(process.argv[2],  function callbck(err, list){
	 list.filter(function rightExt( file){
	if(path.extname(file)== ('.'+process.argv[3])){
		console.log(file)
		return true;
	}
	else return false;
})
	
})


 

