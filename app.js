const express  = require('express')
const  mongo= require('mongoose')
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const Costomer = require('./model/user');
//const sign = require('./router/sign')
const app = express();
app.use(express.json());
dotenv.config();
app.use(express.urlencoded({extended:false}))
const CONNECTION = process.env.CONNECTION
mongoose.set('strictQuery',false)
const logger = require('./midle')
const log = require('./mid')
const PORT = process.env.PORT || 3000   

async function connect(){
    try{
        await mongoose.connect(CONNECTION)
        console.log('connected to mongoss')
    }catch(error){
        console.log(error ,()=> {'not connected'})
    }



    
app.listen(PORT, ()=>{
    console.log('server started on '+ PORT)
})} 

connect()
app.get('/up/:id', async (req,res)=>{
    let {price,des,category,rate} = req.body
    console.log(req.params)
   
    //const  mo = await Costomer.findOne({email})
    //const  pa = await  Costomer.findOne({pass})
   
    // if(!email,!pass){
          //res.status(400).json({message:"all fields are required"})
     //}
      // if(!mo,!pa){
        //   res.status(400).json({msg:"mail or passwass not correct"})
       //}
       
        //   console.log(mo.pass,pa.pass)
       
   
       //if(mo.pass === pa.pass){
      //   res.status(400).json({msg:'user name or password does not match'})
     //  }
     //  if(pass1 !== pass2){
          // res.status(400).json({msg:'new pass doest not match'})
     //  }
   
   
       //const up = await Costomer.updateOne({pass:mo.pass},{$set:{pass:pass1}})
   
   
     
       
      // res.status(200).json(up)
   })


app.use('/sign', log ,require('./router/sign'))
app.use('/log',require('./router/login'))
app.use('/pro',require('./router/procr'))
app.use('/all',require('./router/allpr'))
app.use('/one',require('./router/onep'))
app.use('/one',require('./router/updpass'))
app.use('/',logger, require('./router/updcuster'))
app.use('/',logger, require('./router/dele'))

