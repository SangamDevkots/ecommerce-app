

import { useState } from 'react'
import  {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai';
import {NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Navbar = () => {
  const [Navbar, setNavbar]= useState (true)
  const count = useSelector((state) => state.user.cart.length)

  return (
   <>
<nav className=' w-full fixed-top top-0 right-0 z-10 flex justify-between px-10 shadow-md py-4  '>
<div className="logo">
  <h1>SennGm Store</h1>
</div>

<div className=" links">
<ul className=' space-x-10 hidden md:flex items-center '>

<li><NavLink to="/products"> Home</NavLink></li>
<li><NavLink to="/products"> Products </NavLink></li>
<li><NavLink to="/products"> Contact </NavLink></li>
</ul>
</div>
<div className="buttons flex">
  <form action="
  ">



  </form>
  
  <div className="cart mx-2">
  <NavLink to="/cartitems">  <button> <i className="fa-solid fa-cart-shopping"></i></button> </NavLink>
<li className=' absolute top-2 list-none  bg-violet-700 rounded-md  text-white  '>{count}</li>
  </div>
  <div className="login ">
  <i className="fa-solid fa-user"></i>
  </div>
</div>
{
  Navbar ?
  <AiOutlineMenu onClick={()=> setNavbar (!Navbar)} className=' text-2xl md:hidden block  ' /> 
  :
  <AiOutlineClose onClick={()=> setNavbar (!Navbar)} className=' text-2xl md:hidden block' />
}


</nav>

<div className="mobile flex-col justify-center w-30 items-center  bg-black ">
<ul className={ ` md:hidden items-center    text-white ${ Navbar ? ' hidden' : 'block w-screen  h-screen ' }  `} >

<li><NavLink to="/products"> Home</NavLink></li>
<li><NavLink to="/products"> Products </NavLink></li>
<li><NavLink to="/products"> Contact </NavLink></li>
</ul>
</div>



   </>
  )
}

export default Navbar
