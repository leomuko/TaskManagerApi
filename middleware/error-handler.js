const {CustomApiError} = require('../errors/custom-error')

const errorHandlerMiddleWare = (err, req, res, next) =>{
    const statusCode = err.status
    if (statusCode >= 100 && statusCode < 600){
        return res.status(err.status).json({msg : err.message})
    }
        
    return res.status(500).json({msg : "Something went wrong, Please try"})
}

module.exports = errorHandlerMiddleWare