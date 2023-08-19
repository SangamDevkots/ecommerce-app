

import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { User, useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ userPicture }) => { 
  const [Navbar, setNavbar]= useState (true);
  const count = useSelector((state) => state.user.cart.length);
  const { loginWithRedirect } = useAuth0();

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

  <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" class="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
    <span class="sr-only">Open user menu</span>
    <img onClick={() => loginWithRedirect()} src={userPicture} alt="userphoto"/>
</button>

<div id="dropdownAvatar" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
    <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
      <div>Bonnie Green</div>
      <div class="font-medium truncate">name@flowbite.com</div>
    </div>
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
    </ul>
    <div class="py-2">
      <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
    </div>
</div>

    
  {/* <button onClick={() => loginWithRedirect()}>  <i className="fa-solid fa-user"></i></button> */}

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
<ul className={ ` md:hidden items-center    text-white ${ Navbar ? ' hidden' : 'p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-black' }  `} >

<li><NavLink to="/products"> Home</NavLink></li>
<li><NavLink to="/products"> Products </NavLink></li>
<li><NavLink to="/products"> Contact </NavLink></li>
</ul>
</div>



   </>
  )
}

export default Navbar
