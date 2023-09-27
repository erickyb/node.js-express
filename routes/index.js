const express = require('express');
//const router = express.Router();
const tareasRouter = require('./tareas.router');
//const productsRouter=require('./tareas.router')
//const  generador = require('../modules/generador');

function routerApi(app){
    
    const router = express.Router();
   // app.use('/products',productsRouter);
    router.use('/tarea',tareasRouter);

}

module.exports = routerApi;

