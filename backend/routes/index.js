const express =require ('express')
const userroutes=require('./user')
const accountroutes=require('./account')
const router =express.Router()
router.use ('/user',userroutes)
router.use('/account',accountroutes)






module.exports= router

