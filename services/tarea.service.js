//const generadorDeDatos = require('../modules/generador');
const express=require('express');
const router = express.Router();

class TareaService{
 constructor(){
    this.productos=[];
 }
    async create(producto){}

    async find(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                resolve(this.productos);
                },5000);
        });
    }
    async findOne(id){}
    async update(id,change){}
    async delete(id){}
    
};
//module.exports={TareaService,router};

module.exports=TareaService;






