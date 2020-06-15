const http = require ("http")
let ropa = require ("./productos")
http.createServer(function(req,res) {
    res.writeHead(200, {"content-type": "text/html; charset = utf-8"})
    
    switch (req.url) {
        case "/":
           res.end ("Bienvenido a EcheHome")
            break;
        case "/productos":
            res.end (ropa)    
        default:
            res.end ("debe escribir una direccion valida")
            break;
    }



}).listen(2020,"localhost");