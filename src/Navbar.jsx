import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = ({ userPicture }) => { 
  const [isNavOpen, setIsNavOpen] = useState(true);
  const count = useSelector((state) => state.user.cart.length);
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <nav className='w-full fixed top-0 right-0 z-10 flex justify-between px-10 shadow-md py-4 bg-gray-900 text-white '>
        <div className="logo">
          <h1>SennGm Store</h1>
        </div>
        <div className="links hidden md:flex items-center space-x-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className="buttons flex items-center">
          <div className="cart relative mx-2">
            <NavLink to="/cartitems">
              <button>
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
            </NavLink>
            <span className='absolute top-0 right-0 -mt-1 -mr-1 bg-violet-700 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center'>{count}</span>
          </div>
          <div className="login flex items-center">
            <button onClick={() => loginWithRedirect()}>
              <i className="fa-solid fa-user"></i>
            </button>
            <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex ml-3 text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
              <span className="sr-only">Open user menu</span>
            </button>
            <div id="dropdownAvatar" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
              <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                <div>Bonnie Green</div>
                <div className="font-medium truncate">name@flowbite.com</div>
              </div>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                <li>
                  <NavLink to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</NavLink>
                </li>
                <li>
                  <NavLink to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</NavLink>
                </li>
                <li>
                  <NavLink to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</NavLink>
                </li>
              </ul>
              <div className="py-2">
                <NavLink to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</NavLink>
              </div>
            </div>
          </div>
        </div>
        {isNavOpen ? (
          <AiOutlineMenu onClick={() => setIsNavOpen(!isNavOpen)} className='text-2xl md:hidden block' />
        ) : (
          <AiOutlineClose onClick={() => setIsNavOpen(!isNavOpen)} className='text-2xl md:hidden block' />
        )}
      </nav>

      <div className="mobile flex-col justify-center w-30 items-center bg-black">
        <ul className={`md:hidden items-center text-white ${isNavOpen ? 'hidden' : 'p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-black'}`}>
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;
