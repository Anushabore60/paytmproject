import { Input } from "postcss";

export function Inputbox({label,placeholder}){
    return <div className="pb-4"><div className="text-sm font-medium pl-2 pb-1">
        {label} </div>
        <input placeholder={placeholder}  className="w-ful px-4 py-2 rounded-lg "/>
        </div>
}

