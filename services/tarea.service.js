const generadorDeDatos = require('./generador');
class ProductoService{
 constructor(){
    this.productos=[];
 }
    async create(){}
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
router.get('/:id',async (req,res,next)=>{
    try{
        const{id}=req.params;
        const producto=await service.findOne(id);
        res.json(producto);
    }catch(err){
        next(err);
    }
});
module.exports=ProductoService;





