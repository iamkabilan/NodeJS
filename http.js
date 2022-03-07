const http=require("http");

http.createServer(function(req,res) {
    if(req.url=="/") {
        res.end("Welcome Home");
    }
    if(req.url=="/about") {
        res.end(`
            <h1 style="color: red;">Welcome About</h1>
        `);
    }
    //res.write("welcome");
	//res.end();
}).listen(8081);