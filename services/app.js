const express = require('express');
const app = express();
const port =3000;
app.get('/',(req,res)=>{
    res.send('servicio erick :)')
});

app.listen(port, ()=>{
    console.log('Mi port'+port);
});

const express=require('express');
const router = express.Router();

router.get('/:id',(req,res)=>{
    const{id}=req.params;
res.json({id,name:'Product 2',price:2000})
;});

router.patch('/:id',(req,res)=>{
    const {id}=req.params;
    const body = req.body;
    res.json({
        message:'update',
        data:body,
        id,
    });
});


router.post('/',(req,res)=>{
    const body=req.body;
    res.json({
        message:'create',
        data:body
    });
});


router.delete('/:id',(req,res)=>{
    const{id}=req.params;
    res.json({
        message:'deleted',
        id,
    });
});


