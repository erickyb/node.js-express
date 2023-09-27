const express = require('express');
const routerApi = require('./routes/index');
const cors = require('cors');
const app = express();
const router = express.Router();
//const generador = require('../modules/generador');
const {longError,errorHandler} = require('./middlewares/error.handler');
//const {createTareaSchema, updateTareaSchema,  getTareaSchema} = require('../schemas/tarea.schema');
const validatorHandler = require('./middlewares/validator.handler');


const port = process.env.PORT || 3000;



app.listen(port, ()=>{
    console.log('Mi puerto Erick '+port);
  });

app.use(longError);
app.use(errorHandler);

app.use(express.json());

const whitelist = ['http://localhost:3000'];
const options = {
  origin: (origin,callback)=>{
    if(whitelist.includes(origin) || !origin){
      callback(null,true);
    }else{
      callback(new Error('acceso no permitido'));
    }
  }
}

app.use(cors());

routerApi(app);


//router.post('/',
//validatorHandler(createTareaSchema,'body'),
//async (req, res) => {
 // const body = req.body;
 // const Newtarea = await service.create(body);
 // res.json({
 //   message: 'created',
 //   data: Newtarea
 // });
//  });

