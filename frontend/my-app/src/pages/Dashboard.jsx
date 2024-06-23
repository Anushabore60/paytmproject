import { Users } from "../components/Users";
import { Balance } from "../components/balance";
import{Appbar} from "../components/appbar"


export function Dashboard(){
    return <div className="bg-slate-500 h-screen">
        <Appbar />
        <Balance />
        <Users />
    </div>
}