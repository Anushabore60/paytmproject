import { Bottomwarning } from "../components/bottomwarning";
import { Button } from "../components/button";
import { Heading } from "../components/heading";
import { Inputbox } from "../components/inputbox";
import { SubHeading } from "../components/subheading";
import { Signup } from "./signup";
import axios from 'axios'





export function Signin (){
    return <div>
        <div className="bg-slate-500 h-screen  flex justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <Heading label="Signin"/>
                <SubHeading label="Enter your credentials to acces your account"/>
                <Inputbox label="username" placeholder={"jhon"}/>
                <Inputbox label="password" placeholder={"jhon123"}/>
                <Button onClick={async()=>{
                    const res= await axios.post("http://localhost:3000/api/v1/user/signin")
                }}label="Signin" />
                <Bottomwarning label="Don't have any account?" buttonText= {"Signup"} to="/Signup"/>

            </div>
        </div>
    </div>
}