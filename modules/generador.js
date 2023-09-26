const  generador = require('../modules/generador');

class generadorDeDatos{
  constructor(){
   this.productos=[];
    this.generate();
  }
  generate(){
    this.productos = [
      {id:'1', nombre:"prd1", price: 100},
      {id:'2', nombre:"prd2", price: 200},
      {id:'3', nombre:"prd3", price: 300}
    ]
  }
  create(data){
  const Newproducto ={
        id: generador.NewCodProd(this.productos),
        ...data
    }
    this.productos.push(Newproducto);
    return Newproducto;
  }
  find(){
    return this.productos;
  }
  findOne(id){
    return this.productos.find((items) => items.id === id);
  }
  update(id, change){
    const index = this.productos.findIndex(item => item.id === id);
    if(index === -1){ throw new Error("Producto inexistente");}
    const producto = this.productos[index];
    this.productos[index] = {
      ...producto,
      ...change
    }
    return true;
  }
  delete(id){
    const index = this.productos.findIndex(item => item.id === id);
    if(index === -1){ throw new Error("Producto inexistente");}
    this.productos.splice(index,1);
    return {id};
  }
}
module.exports = generadorDeDatos;