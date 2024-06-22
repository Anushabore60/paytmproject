
import { Link } from 'react-router-dom'
import {link} from 'react-router-dom'

export  function Bottomwarning({lable,button,to}){

    return <div className='text-sm py-2  flex justify-center'>
        <div>
            {lable}
        </div>
       <Link  className='pointer underline pl-1 cursor-pointer" to
          {buttonText}'>
       </Link>


    </div>

}
