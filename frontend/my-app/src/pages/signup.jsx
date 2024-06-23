  import { Inputbox } from '../components/inputbox'
import { SubHeading } from '../components/subheading'
import {Heading} from '../components/heading'
import { Bottomwarning } from '../components/bottomwarning'
import{Button} from '../components/button'
import { useState } from 'react'
 import axios from 'axios'
import { json, useNavigate } from 'react-router-dom'

 export function Signup (){
  const navigate =useNavigate()
  const[firstname,setFirstname]=useState("")
  const[lastname,setLastname]=useState("")
  const[username,setUsername]=useState("")
  const[password,setPassword]=useState("")
  const handleSignup=async ()=> {
    try{
     const response= await axios.post("http://localhost:3000/api/v1/user/signup",{
        firstname,
        lastname,
        username,
        password
      })
      
    localStorage.setItem( 'token',response.data.token)
    navigate("/Dashboard")

  }
  catch (error){
    console.log("couldn't sign up please try later",error)
  }}

    return  <div>
      <div className='bg-slate-500 h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center '>
      <div className='bg-white-300 w-full rounded-lg'> </div>
            <Heading  label={"signup"}/>
        <SubHeading label={"enter details to create your account  "} />
        <Inputbox label="FirstName"  placeholder="jhon" value={firstname}  onChange={(e) =>{setFirstname(e.target.value)}} />
        <Inputbox label="lastName"  placeholder="meri" value={lastname}    onChange={(e)=>{setLastname(e.target.value)}}/>
        <Inputbox label="username"  placeholder="jhonnn" value={username}  onChange={(e)=>{setUsername(e.target.value)}}/>
        <Inputbox label="password"  placeholder="jhon123" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <Button onClick={handleSignup}label="signup"/>
        <Bottomwarning label=" Already have an account?" buttonText="signin"to="/signin" />
       
        </div>
</div>
    </div>
 }