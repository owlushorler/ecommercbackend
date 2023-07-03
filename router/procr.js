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



router.post('/', async (req,res)=>{

    
    let {name,price,des,category,rate} = req.body
    if(!name || !price || !category|| !rate){
        res.status(400).json({message:"all fields are required"})
    }

    cust = new Costomer({
        name:name,
        price:price,
        des:des,
        category:category,
        rate:rate

    })
    cust.save()
    res.status(200).json({cust})
})



module.exports= router