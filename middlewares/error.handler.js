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