const { Jwt_Secrete}= require("./config")
const jwt=require('jsonwebtoken')
 
const authMiddleware = (req,res,next)=>{
const authheader=req.headers.authorization
if(!authheader||!authheader.startsWith('Bearer ')){
    return res.status(403).json({message:"invalid  token"})
}
const token=authheader.split(' ')[1]
try{
    const decoded=jwt.verify(token,Jwt_Secrete)
    req.userId=decoded.userId
    next()
} catch(err){
res.json({message:"error while verifying the token"})
}
}
module.exports={authMiddleware}