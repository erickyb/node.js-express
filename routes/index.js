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
const routerApi = require('express');
const app = express();
 
const port =3000;
routerApi(app);
app.listen(port, ()=>{
    console.log('mi port'+port)
});

