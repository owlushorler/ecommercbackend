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



router.put('/', async (req,res)=>{
 let {email,pass,pass1,pass2} = req.body
 const  mo = await Costomer.findOne({email})
 const  pa = await  Costomer.findOne({pass})

  if(!email,!pass){
       res.status(400).json({message:"all fields are required"})
  }
    if(!mo,!pa){
        res.status(400).json({msg:"mail or passwass not correct"})
    }
    
        console.log(mo.pass,pa.pass)
    

    if(mo.pass === pa.pass){
      res.status(400).json({msg:'user name or password does not match'})
    }
    if(pass1 !== pass2){
        res.status(400).json({msg:'new pass doest not match'})
    }


    const up = await Costomer.updateOne({pass:mo.pass},{$set:{pass:pass1}})


  
    
    res.status(200).json(up)
})



module.exports= router