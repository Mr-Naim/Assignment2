var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){

    if(req.url=="/"){
        var data = fs.readFileSync('home.html', 'utf-8');
        res.end(data);

    }

    else if(req.url=="/About"){
        var data = fs.readFileSync('about.html','utf-8');
        res.end(data);

    }

    else if(req.url=="/Terms"){
        var data = fs.readFileSync('terms.html','utf-8');
        res.end(data);

    }

    else {
        var data = fs.readFileSync('contact.html','utf-8');
        res.end(data);
     }

})
server.listen(4040);
console.log("Server Has Run Successfully");
