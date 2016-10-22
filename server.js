//Cargando libreria HTTP
var http = require('http');
//Contador
var counter = 0;
//configurar puerto
var IP = process.env.IP || '127.0.0.1';  //sino funciona el primer valor, el segundo se asigna
var PORT = process.env.PORT || 3000;
//Crear un servidor
var server = http.createServer(function(req, res){
    console.log( "Peticion solicitada: "
        + req.url);
        // + req.connection.remoteAddress);
        if(req.url!== "/favicon.ico"){
            counter ++;
        }
        console.log(`Visitas No. ${counter}`);
    res.writeHead(200,{
        "Content-Type": 'text/html',
        "X-powered-by": 'node',
        "server": "pawm-server@1.0.0",
    });
    /*Enviar datos al browser*/
    res.write("<title>Alan</title>");
    res.write("<h1 style=color:pink>Mis gustos</h1>");
    res.write("<ul style=color:blue>");
    res.write("<li>Pizza</li>");
    res.write("<li>Futbol</li>");
    res.write("<li>Xbox</li>");
    res.write("</ul>\n");

    res.write(`<p style='color:red'>Visitas el dia de hoy son: ${counter} </p>`);
    /*Cerrar conexion*/
    res.end();
});

server.listen(PORT,IP,function(){
    /*callback*/
    console.log(`> Server funcionando en http://${IP}:${PORT}`);
});