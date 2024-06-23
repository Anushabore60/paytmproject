import { useState } from "react";
import { Button } from "./button";
export function Users (){
    const [users, setUsers] = useState([{
        firstName: "Harkirat",
        lastName: "Singh",
        _id: 1
        }]);

    return <div>
    <div className="font-bold mt-6 text-lg pl-8 ">Users: </div>
    <div className="my-2  pl-10 pt-4 pr-16 ">
    <input type="text" placeholder="search for users...." className="pb-4 pt-2 w-full rounded-md pl-4" /> 
    <div>
 {users.map(user => <User user={user} />)}
 </div>
    </div>
    </div>
}
function User({user}) {
      return <div className="flex justify-between">
    <div className="flex pt-5">
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2 ">
            <div className="flex flex-col justify-center h-full text-xl ">
                {user.firstName[0]}
            </div>
        </div>
        <div className="flex flex-col justify-center h-ful">
            <div>
                {user.firstName} {user.lastName}
            </div>
        </div>
    </div>

    <div className="flex flex-col justify-center h-ful">
        <Button onClick={(e) => {
            navigate("/send?id=" + user._id + "&name=" + user.firstName);
        }} label={"Send Money"} />
    </div>
</div>
}
    
   