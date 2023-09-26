var fs = require('fs')

fs.readFile('file1.js', 'utf8', function(err, data){
    console.log(data)
})

fs.writeFile('file3.js', 'writeFile method -new file', function(){
            console.log('data saved')
})

fs.appendFile('file3.js', ' add with the existing data', function(){
    console.log('added new data')
})