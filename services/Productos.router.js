const ProductoService = require(.../services/productos.service);
const service = new ProductoService();
router.get('/',(req,res)=>{
    const products=service.find();
    res.json(products);
});

router.get('/:id',(req,res)=>{
    const {id}=req.params;
    const productos=service.findOne(id);
    res.json(productos);
});

const Generador = require('../modules/Generador');
class ProductoService{
    constructor(){
        this.productos=[];
        this.generador();
    }
    generador(){
        this.productos=[
            {id:'1',nombre:"prd1",price:100},
            {id:'2',nombre:"prd2",price:200},
            {id:'3',nombre:"prd3",price:300}

        ]
    }
    create (data){
        const Newproducto ={
            id:Generador.newCodProd(this.productos),
            ...data
        }
        this.productos.push(Newproducto);
        return Newproducto;
        }
        find(){
            return this.productos;
          }
          findOne(id){
            return this.productos,find((items)=>items.id===id);
          }

          update(id,change){
            const index = this.productos.findIndex(item=>item.id===id);
            if(index===-1){throw new Error("Producto inexistente");}
            const productos= this.productos[index];
            this.productos[index]={
                ...productos,
                ...change
            }
            return true;
          }

          delete(id){
            const index = this.productos.findIndex(item=>item.id===id);
            if(index===-1){throw new Error("Producto inexistente");}
            this.productos.splice(index,1);
            return{id};
          }
        }
        
        module.exports=ProductoService;

