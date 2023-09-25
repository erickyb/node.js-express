const productsRouter= require('./products.router');

function routerApi(app){
    app.use('/products',productsRouter);
}

module.exports=routerApi;


const express=require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    const products=[{},{}];
    const {size}=req.query;
res.json(products);
});

router.get('/:id',(req,res)=>{
    const{id}=req.params;
    res.json({id,name:"Products 2",price:2000});
});


const express = require('express');
const productosRouter = require('./productos.router.js');
const { route } = require('express/lib/application');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1',router);

    route.use('/productos',productosRouter);

}
module.exports=routerApi;

const express = require ('express');
const routerApi = require('./router/index');
const app = express();
const port = 3000;
app.listen(port, ()=>{
    console.log('mi port' + port);
});


router.post('/',(req,res)=>{
    const body=req.body;
    res.statusCode(2001).json({
        message:'created',
        data:body
    });
});