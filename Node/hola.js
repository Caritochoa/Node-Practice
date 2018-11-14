var http = require("http")

var controlador = function(peticion, respuesta){
    console.log("recibido")
    respuesta.end("bienvenidos a node.js")
}

var servidor = http.createServer(controlador)

servidor.listen(8080)