import { Button } from "../components/button"
import { Inputbox } from "../components/inputbox"

export function Sendmoney(){
    return <div  className="flex justify-center h-screen bg-gray-300">
           <div className="flex  flex-col h-full justify-center " >
   
        <div className="border  max-w-md h-min rounded-lg text-card-foreground space-y-8 shadow-lg bg-white  "> 
            <div className="font-bold text-2xl pl-24 pr-24">
             Send Money
            </div>
            <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-slate-300 pt-2" >
             <span className=" font-semibold  text-xl pl-4 ">A </span>
             </div>
                <span className="font-semibold text-xl ">Friend's name</span> 
                </div>
                <div className="flex items-center space-y--4 pl-6 drop-shadow-xl pt-4">
                <Inputbox label="Amount in Rs" placeholder="Enter Amount"></Inputbox>
                </div>
                <Button label="Transfer money" onClick="transfermoney" >

                </Button>
              </div>
        </div>
    </div>
}