const express = require('express');
const router = express.Router();
const TareaService = require('../services/tarea.service');


router.get('/',(req,res)=>{
    const products=[{},{}];
    const {size}=req.query;
res.json(products);
});

router.get('/', async(req,res)=>{
  try{
    //llama a un servicio para obtener las tareas, suponiendo que tareaservice tenga una funcion gettarea
    const tarea =await TareaService.getTarea();
    res.json(tarea);
  }catch (error){
    console.error(error);
    res.status(500).json({error:'Hubo un error al obtener las tarea.'});
  }
});

//router.get('/:id',(req,res)=>{
 //   const{id}=req.params;
 //   res.json({id,name:"Products 2",price:2000});
//});

   //GET  api/tarea/:id
  
router.get('/:id', async (req,res)=>{
  const {id} = req.params;
  try{// llama a un servicio para obtener una tarea por su ID, 
    //suponiendo  que tareaServicio tenga una funcion getTareaPorID
    const tarea = await TareaService.getTareaPorId(id);
    if(!tarea){(404).json({error: 'tarea no encontrada.'});
      return res.status
    }
 res.json(tarea);
  }catch (error){
    console.error(error);
    res.status(500).json({error:'hubo un error al obtener la tarea.'});
     }
  });


//router.post('/', (req, res) => {
 //   const body = req.body;
 //   res.statusCode(2001).json({
 //     message: 'created',
 //     data: body
 //   });
 // });



 //post  /api/tareas
router.post('/',async(req,res)=>{
const body = req.body;
try{
  //llama a un servicio para crear una nueva tarea, suponiendo que tareaservice tenga una funcion creartarea.
  const nuevaTarea= await TareaService.crearTarea(body);
  res.status(201).json({
    message:'tarea creada exitosamente.',
    data:nuevaTarea,
  });

}catch(error){
  console.error(error);
  res.status(500).json({error:'hubo un error al crear la tarea.'});
}

});









//const service = new TareaService();

//router.use((err,req,res,next) => {
 // console.error(err);
 // res.status(500).json({error:'Internal server error '});
//});

//router.get('/:id', async (req,res,next) => {
   // try{
   //     const{id} = req.params;
   //     const tarea = await service.findOne(id);

   //     if(!tarea){
   //       res.status(404).json({error:'Tarea no encontrado'});
   //       return;
   //     }
   //     res.json(producto);
   // }catch(err){
    //    next(err);
   // }
//});
module.exports=router;






