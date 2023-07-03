const express  = require('express')
const  mongo= require('mongoose')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Costomer = require('../model/user');

const app = express();
app.use(express.json());
dotenv.config();
app.use(express.urlencoded({extended:false}))
const CONNECTION = process.env.CONNECTION
mongoose.set('strictQuery',false)
const PORT = process.env.PORT || 3000 
const router = express.Router() 
const joi = require('joi')

const joii = joi.object({
    email:joi.string(),
    pass:joi.number(),
    name:joi.string(),
    num:joi.number()
    
})


router.post('/', async (req,res)=>{
    const {error,value} = joii.validate(req.body)
    if(error){
        console.log(error)
        return res.send(error.details)
    }

    
    let {email,pass,name,num} = req.body
    if(!email || !pass || !name || !num){
        res.status(400).json({message:"all fields are required"})
    }
    let kol = await Costomer.findOne({email})
    if(!kol){
        res.status(200).json({msg:"user dost exit"})
    }

   
  
    cust = await new Costomer({
        email:email,
    pass:pass,
    name:name,
    num:num,

    })
    cust.save()
    res.status(200).json({cust})
})



module.exports= router