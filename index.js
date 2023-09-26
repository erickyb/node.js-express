const express = require('express');
const routerApi = require('./routes/index');
const cors = require('cors');
const app = express();
const generador = require('../modules/Generador');
const {longError,errorHandler}=require('./middlewares/error.handler');

const port = process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log('Mi port'+port);
  });

app.listen(port, ()=>{
    console.log('Mi port'+port);
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

