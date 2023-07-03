const joi = require('joi')


const  logger =(req,res,next)=>{
    const signup = joi.object({
        email:joi.string().required(),
        pass:joi.string().required(),
         name:joi.string().required(),
        num:joi.string().required()
    })
     
    const {error,value}= signup.validate(req.body)
    next()

    if(error){
        console.log(error)
        return res.send("invalid input")
    }
}


module.exports= logger