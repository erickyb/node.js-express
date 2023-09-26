

function longError(error,req,res, next){
    console.error(error);
    next(error);
  }
  function errorHandler(err,req,res,next){
    res.status(500).json({
    mesagge: err.message,
    stack: err.stack
      });
    }

    function BoomErrorHandler(err,req,res,next){
    
          if(err.isBoom){ 
            const {output}= err;  
            res.status(output.statusCode).json(output.payload);
       
          }
          next(err);
        }
        module.exports = { BoomErrorHandler,errorHandler,longError};