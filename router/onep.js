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



router.get('/', async (req,res)=>{
    
    try{
        console.log()
        const neww =await Costomer.find()
        res.json({ neww})

    }catch(e){console.log(e)}

})



module.exports= router