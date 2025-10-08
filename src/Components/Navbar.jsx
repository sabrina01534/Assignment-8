import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
         <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      
       
    </div>
    <a className="btn btn-ghost text-xl text">HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink to='/' className='text'>Home</NavLink></li>
      <li><NavLink to='/trendingapp' className='text'>Apps</NavLink></li>
      <li><NavLink to='/application' className='text'>Installation</NavLink></li>
      
    </ul>
  </div>
  <div className="navbar-end">
    <NavLink className="btn">Contribute</NavLink>
  </div>
</div>  
        </div>
    );
};

export default Navbar;