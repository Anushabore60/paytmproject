const express =require ('express')
const userroutes=require('./user')
const accountroutes=require('./account')
const router =express.Router()
router.use ('/user',userroutes)
router.use('/account',accountroutes)
//router.use ('/user',userroutes)






module.exports= router

