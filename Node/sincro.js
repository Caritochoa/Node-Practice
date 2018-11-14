var http = require("http")//solitando el modulo http
fs = require("fs")

var contenido = fs.readFileSync('/index.html')

http.createServer(function(req,res){//creando el servidor creando el callback
    res.write(contenido)
    res.end()
    }).listen(8080)