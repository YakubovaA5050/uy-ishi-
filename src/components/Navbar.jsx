import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../assets/logo.svg'

const Navbar = () => {
    const active = "rounded px-4 py-2 bg-blue-500  "
    const panding = "text-white px-4 py-2"
  return (
    <nav className='bg-[white] text-[black] py-4'>
    <div className="container mx-auto flex justify-between items-center ">
      <div className='flex items-center gap-2'><img src={img} alt="" />  
      </div>

     <ul className='flex gap-10'>
         <li>
             <NavLink to="/"   className={({ isActive, isPending }) =>
    isPending ? panding : isActive ? active : ""
  }>Home</NavLink>
         </li>
         <li>
             <NavLink to="/about" className={({ isActive, isPending }) =>
    isPending ? panding : isActive ? active : ""
  }>About</NavLink>
         </li>
         <li>
             <NavLink to="/services" className={({ isActive, isPending }) =>
    isPending ? panding : isActive ? active : ""
  }>Services</NavLink>
         </li>
         <li>
             <NavLink to="/reviews" className={({ isActive, isPending }) =>
    isPending ? panding : isActive ? active : ""
  }>Reviews</NavLink>
         </li>
    
     </ul>
     <button className='bg-[#0082F4] text-[#fff] px-4 py-2 rounded'>Get Started</button>
    </div>
    <div><button className='w-[100%] h-[1px] bg-[020202] border '></button></div>
 </nav>
  )
}

export default Navbar
