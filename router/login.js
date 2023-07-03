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



router.get('/', async (req,res)=>{
    
    let {email,pass,name,num} = req.body
    let kol = await Costomer.findOne({email})
    let mol = await Costomer.findOne({pass})
   try{ if(kol.pass !== mol.pass){
        res.json({msg:"invalid user"})
    }
    if(!kol){
        res.json({msg:"invalid user"})
    }

 res.json({kol})}
 catch(e){console.log(e)}


})



module.exports= router