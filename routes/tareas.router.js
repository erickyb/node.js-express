const express = require('express');
const router = express.Router();
const tareaService = require('../services/tarea.service');


router.get('/',(req,res)=>{
    const products=[{},{}];
    const {size}=req.query;
res.json(products);
});

router.get('/:id',(req,res)=>{
    const{id}=req.params;
    res.json({id,name:"Products 2",price:2000});
});

router.post('/', (req, res) => {
    const body = req.body;
    res.statusCode(2001).json({
      message: 'created',
      data: body
    });
  });

module.exports=router;






