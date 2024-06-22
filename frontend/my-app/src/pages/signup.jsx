  import { Inputbox } from '../components/inputbox'
import { SubHeading } from '../components/subheadinfg'
import {Heading} from '../components/heading'
 
 export function Signup (){
    return <div>
        <Heading  label={"sign up"}/>
        <SubHeading label={"enter details to create your account  "} />
        <Inputbox label={"FirstName"}  placeholder="jhon" />
        <Inputbox label={"lasttName"}  placeholder="meri" />
        <Inputbox label={"usertName"}  placeholder="jhonnn"/>
        <Inputbox label={"password"}  placeholder="jhon123"/>
        <button label={"sign up"}/>
        <BttomWarning label={" Already have an account?"}   />


    </div>
 }