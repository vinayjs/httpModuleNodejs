var fs = require('fs')

fs.readFile('file1.js', 'utf8', function(err, data){
    console.log(data)
})