import { Input } from "postcss";

export function Inputbox({lable,placeholder}){
    return <div className="text-sm font-medium py-2">
        {lable}
        <input placeholder={placeholder}  className="w-ful px-2 py-4"/>
    </div>


}

