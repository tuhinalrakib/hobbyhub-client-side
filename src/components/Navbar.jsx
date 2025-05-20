import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const Navbar = () => {
    const {user} = use(AuthContext)
    console.log(user)
    const links = <>
        <NavLink to="/" className='px-2 py-4 hover:bg-gray-200 rounded mr-3'>Home</NavLink>
        <NavLink to="/allgroup" className='px-2 py-4 hover:bg-gray-200 rounded mr-3'>All Groups</NavLink>
        <NavLink to="/creategroup" className='px-2 py-4 hover:bg-gray-200 rounded mr-3'>Create groups</NavLink>
        <NavLink to="/mygroup" className='px-2 py-4 hover:bg-gray-200 rounded'>My groups</NavLink>
        { user ? "" : 
        <>
        <NavLink to="/login" className='px-2 py-4 hover:bg-gray-200 rounded'>Log In</NavLink>
        <NavLink to="/register" className='px-2 py-4 hover:bg-gray-200 rounded'>Register</NavLink>
        </>}
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? <button className='btn'>Log Out</button> : ""}
            </div>
        </div>
    );
};

export default Navbar;