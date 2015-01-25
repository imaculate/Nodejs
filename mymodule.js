var fs = require('fs')




var path = require('path')
	
module.exports = function mysterious(directory, ext,callback){
	fs.readdir(directory, function foo(err, list){
		if(err)
			return callback(err)
		fil = list.filter(function bar(file){
			if(path.extname(file) == '.'+ ext)
				return true;
			else 
				return false;
		})
		return callback(null,fil)
	})
}