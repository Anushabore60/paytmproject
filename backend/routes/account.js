const express=require('express')
const {authMiddleware} =require('../middleware')
const router=express.Router()
const Account=require('../db')

router.get('/balance', authMiddleware,async (req,res)=>{
    const account =await Account.findOne({
 userId:req.userId
    })
    const balance=account.balance
    res.status(200).json({
        message:'your  Account balance is:'`(${balance})`
    })
    })
    
    
    router.post('/transfer',async(req,res)=>{
    const{amount,to}=req.body
    const account =await Account.findOne({
        userId:req.userId
           })
           if(account.balance<amount){
            res.status(400).json({message:'insufficent balance '})
           }
           const toaccount=await Account.findOne({
            userId: to
           })
           if(!toaccount){
             return res.status(400).json({message:'ivalid Account'})
           }
           await Account.updateOne({
            userId: req.userId
            }, {
            $inc: {
            balance: -amount
            }
            })
            await Account.updateOne({
            userId: to
            }, {
            $inc: {
            balance: amount
            }
            })
            res.json({
            message: "Transfer successful"
            })
           });



module.exports=router