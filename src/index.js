//Guardamos un objeto express dentro de una constante
const express = require('express');
//guardamos la ejecucion dentro de otra constante
const app = express();

//Settings
//Configurar puerto, si necesitamos el puerto se usa, si no no
app.set('port', process.env.PORT || 3000);


//Middlewares funciones que se ejecuten antes de que lleguen las rutas
app.use(express.json()); //Si recibimos un json se convertirá solo

//Routes urls de nuestro servidor para procesar datos, recibirlos, etc
app.use(require('./routes/employees'));


//Iniciamos el servidor
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});