import { useState } from 'react'
import { Signup } from './pages/signup'
import { Signin } from './pages/signin'
import { Dashboard } from './pages/Dashboard'
import { Sendmoney } from './pages/sendmoney'
import './App.css'
import { BrowserRouter,Routes,Route ,Link} from 'react-router-dom'
import { Home } from './pages/home'

function App() {
  return <div>

    <BrowserRouter>
    <nav>
      <ul>
        <li className=' flex pl-2 justify-between '>
          <Link to="/home">home</Link>
         <Link to="/Signup">Signup</Link>
         <Link to="/Signin">Signin</Link>
         <Link to="/Dashboard">Dashboard</Link>
         <Link to ="/sendmoney">sendmoney</Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path='/home' element={<Home />} />
     <Route path="/signup" element={ <Signup/>} />
    <Route path="/signin" element={<Signin />} />
     <Route path="/Dashboard" element={ <Dashboard />} />
     <Route path="/sendmoney" element={<Sendmoney />} />
    </Routes>
    </BrowserRouter>
       
      </div>

}

export default App
