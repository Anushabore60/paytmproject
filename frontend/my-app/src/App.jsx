import { useState } from 'react'
import {Sign }from "./components/heading"
import './App.css'

import { BrowserRouter,Routes } from 'react-router-dom'

function App() {
 
  return <div>
    <BrowserRouter>
    
    <nav>
      <ul>
        <li>
         <Link to="/signup">signup</Link>
         <Link to="/signin">signin</Link>
         <Link to="/Dashboard">Dashboard</Link>
         <Link to ="/sendmoney">sendmoney</Link>
        </li>
      </ul>
    </nav>
    <Routes>
     <Route path="/signup" element={ <Sign/>} />
     <Route path="/signin" element={<Sign />} />
     <Route path="/Dashboard" element={ <Dashboard />} />
     <Route path="/sendmoney" element={<Sendmoney />} /> 
    </Routes>
    </BrowserRouter>
       
      </div>

}

export default App
