const joi = require('joi')


const  logger =(req,res,next)=>{
    const signup = joi.object({
        name:joi.string().required(),
        price:joi.string().required(),
        des:joi.string().required(),
        category:joi.string().required(),
        rate:joi.number().required()
    })
     
    const {error,value}= signup.validate(req.body)
    next()

    if(error){
        console.log(error)
        return res.send("invalid input")
    }
}


module.exports= logger