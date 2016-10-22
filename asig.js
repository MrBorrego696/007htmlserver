/*Modulo que me permite crear programas 
que soporten  el protocolo http*/
var http = require('http');
/*creando un servidor basico*/
/*callback funcion anonima*/
 var server = http.createServer(function(req, res){
      /*Responder la respuesta
            1. Especifica que tip de respuesta voy a enviar(señales)*/
                res.writeHead(200,{
                    'Content-Type': 'text/plain',
                    "X-powered-by": 'node',
                    'server': "ITGAM-SERVER",
                });
             /*2. Responder*/
                res.write("-comer tacos\n-jugar basketball\n-jugar en la PC\n-jugar en el playstation\n-dormir\n-molestar a ricky\n");
                
            /*3. Cerra conexion*/
                res.end();
            });
server.listen(3000,'127.0.0.1',function(){
    console.log('Servidor en linea con direccion "@http://127.0.0.1:3000"');
});
