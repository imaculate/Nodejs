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

/*var fs = require('fs')
var path = require('path')
fs.readdir(process.argv[2],  function callbck(err, list){
	 list.filter(function rightExt( file){
	if(path.extname(file)== ('.'+process.argv[3])){
		console.log(file)
		return true;
	}
	else return false;
})
	
})*/

/*var mymodule = require('./mymodule.js')
var stil = mymodule(process.argv[2], process.argv[3], function final(err, data){
	if(err)
		return console.log(err)
	data.forEach(function print(file){
		
	console.log(file)
	})
})*/

/*var http = require('http')

http.get(process.argv[2], function(res) {
	res.on('data', function write(data){
		data  = data.toString()
		var array = data.split('\n')
		array.forEach(function print(line){
			console.log(line)
		})
 })
})*/

/*var http = require('http')

var bl = require('bl')






http.get(process.argv[2], function(res) {
	

	res.pipe(bl(function(err, data) {
			if(err)
				console.log(err)
			else{
				data = data.toString()
	
				console.log(data.length)
				console.log(data)
			}
  }))
	
	
	
 })*/
 
 /* var results = []
 var http = require('http')
 var bl = require('bl')
 var count = 0
 function httpGet(i){
	 
 http.get(process.argv[i], function(res) {
	

	res.pipe(bl(function(err, data) {
			if(err)
				return console.log(err)
			else{
				data = data.toString()
				results[i-2] = data
	
				
			}
			count++
			if(count == 3)
				print()
  }))
	
	
	
 })
 }
 
 function print(){
	 for(var i = 0; i< 3; i++){
		 console.log(results[i])
	 }
 }

 for(var i = 0; i< 3; i++){
	 httpGet(i+2)
 
 }*/
 
 
/* var net = require('net')
 var strftime = require('strftime')
 var server = net.createServer(function(socket){
		var date = new Date()
		socket.end(strftime('%F %R', date).toString())
		socket.end()
		
		
 })
 server.listen(process.argv[2])*/
 
 var http = require('http')
 var bl = require('bl')
 var fs = require('fs')
 var server = http.createServer(function callback(request, response){
	 response.writeHead(200, { 'content-type': 'text/plain' })
	 var file = fs.createReadStream(process.argv[3])
	 file.pipe(response)
 })
 server.listen(process.argv[2])
 
 

 
  





 


 

