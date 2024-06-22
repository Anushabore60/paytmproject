require("dotenv").config()
const express =require('express')
const zod =require ('zod')
 const jwt =require ('jsonwebtoken')
const {Jwt_Secrete} =require('../config')
const { Account,User } = require('../db');
const {authMiddleware}=require('../middleware');

const router =express.Router()

const signupSchema= zod.object({
    firstname:zod.string().min(4),
    lastname:zod.string().min(4),
    username:zod.string().min(4).max(10),
    password:zod.string().min(4),
})
router.post("/signup", async (req,res,next)=>{
   
     const validation =  await signupSchema.safeParse(req.body)
    if(!validation.success){
         return res.status(411).json( { message:'failed to signup /incorrect inputs'})
    }
    const existinguser= await User.findOne({username:req.body.username})
   
    if (existinguser){
        return res.status(409).json({ message:'user alreay exist,choose another name '})
    }  
    console.log("user created ")
const user = await User.create ({

firstname:req.body.firstname,
lastname:req.body.lastname,
username :req.body.username,
 password:req.body.password 
})

//const jwtSecret=process.env.Jwt_Secrete_key
const userId=user._id
  await Account.create({
    userId,
    balance:1+Math.random()*100000
  })
const token=jwt.sign({userId},Jwt_Secrete, { expiresIn: '10h' }); 
res.status(200).json({
    message:'user created succesfully',
    token:  token
})

}) 

const signin=zod.object({
    username: zod.string().min(4),
    password: zod.string().min(4)
})

router.post('/signin',async (req,res)=>{
    const validation=signin.safeParse(req.body)
        if(!validation.success){
            res.status(400).json({message:"user inputs are not validated"})
        }
        const user = await User.findOne({
            username:req.body.username,
            password:req.body.password
        })
        if(user){
            const userId=User._id
           const token= jwt.sign({userId}, Jwt_Secrete)
           res.json({
            token
           })
        }
        {
            return res.status(401).json({message:"error while logiing"})
        }
})
const updateuserdata=zod.object({
    firstname:zod.string().min(4),
    lastname:zod.string().min(4),
    password:zod.string().min(4)
})
router.put('/updateuserdata',authMiddleware,async(req,res)=>{
    const updation=updateuserdata.safeparse(req,res)
    if(!updation.success){

        res.status(403).json({message:" error while updating the user details"})
    }
    
           await User.updateOne({
    _id:req.userId},req.body)
     res.status(200).json({message:"details updated successfully"})
    
})
router.get('/bulk',async(req,res)=>{
    const filter=req.query.filter||""
    const users=await User.find({
        $or:[{
            firstname:{"$regex":filter,$options:'i'}
        },
    {
        lastname:{"$regex":filter,$options:'i'}}]
    })
res.json({
    users:users.map(user=>({
        username:user.username,
        firstname:user.firstname,
        lastname:user.lastname,
        _id:user._id

    }))
   })
})


module.exports = router