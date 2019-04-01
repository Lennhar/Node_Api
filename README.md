# Node_Api
Prueba de api en Node.js
#Iniciar servidor
const http = require('http');
//Constante manejador servidor
const handleServer = function(req,res){
    res.writeHead(200, {'conten-type': 'text/html'});
    res.write('Hola mundo');
    res.end();
}

const server = http.createServer(handleServer);

server.listen(3000, function(){
    console.log('Server on port 3000');
});
