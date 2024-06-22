const mongoose =require ('mongoose') 
const { maxHeaderSize } = require('http')

//import mongoose from 'mongoose'
const { types } = require('util')
mongoose.connect("mongodb+srv://Anusha:ch0SPMoYs6e0c8ys@cluster0.hmylylr.mongodb.net/paytm=?")

 const  userSchema = new mongoose.Schema({
    firstname: { type: String ,
      required:true,
      minlength:4,
      maxlength:20,
      unique:true
    } ,
    lastname:{ type:String,
      required:true,
      minlength:4,
      maxlength:20,
      unique:true
    },
    username:{ 
      type:String,
      required:[true,"username requiredd"],
      trim :true,
      unique:true,


    },
    password: { type:String,
      trim:true,
      required:[true,"password required"],
      unique:true,
    }
  })
  const bankschema= new mongoose.Schema({
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
     balance:{
      type:Number, 
      required:true

    }
  })
  const  User =mongoose.model('User',userSchema)
  const Account=mongoose.model('Account',bankschema)
module.exports={User,Account}