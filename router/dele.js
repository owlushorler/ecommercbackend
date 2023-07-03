const express  = require('express')
const  mongo= require('mongoose')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Costomer = require('../model/product');

const app = express();
app.use(express.json());
dotenv.config();
app.use(express.urlencoded({extended:false}))
const CONNECTION = process.env.CONNECTION
mongoose.set('strictQuery',false)
const PORT = process.env.PORT || 3000 
const router = express.Router() 




router.delete('/:id', async (req,res)=>{
 let {name,price,des,category,rate} = req.body

 if(!name,!price,!des,!category,!rate){
    res.json({msg:"all the fields are required"})
 }

 const idd = req.params.id
 console.log(idd)


 const  mo = Costomer.findById(idd)
 //const  pa = await  Costomer.findOne({pass})
console.log(mo.id)

const you = await Costomer.deleteOne({id:mo.id})
res.json({you})
})



module.exports= router