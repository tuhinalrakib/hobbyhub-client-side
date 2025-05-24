import React, { use, useEffect, useState } from 'react';
import { Navigate, NavLink } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Loading from './Loading';
const promise = fetch("https://hobby-hub-server-ten.vercel.app/users").then(res => res.json())

const Navbar = () => {
    const { user, signOutUser, loading } = use(AuthContext)
    const [theme, setTheme] = useState("light");
    const data = use(promise)
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
    }, [theme]);

    if (loading) {
        return <Loading></Loading>
    }

    if (user && user.email) {
        var matchUser = data.find(item => item.email == user.email)
    }
    console.log(user)



    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    const links = <>
        <NavLink to="/" className='px-2 py-4 hover:bg-gray-200 rounded mr-3'>Home</NavLink>
        <NavLink to="/allgroup" className='px-2 py-4 hover:bg-gray-200 rounded mr-3'>All Groups</NavLink>
        <NavLink to="/creategroup" className='px-2 py-4 hover:bg-gray-200 rounded mr-3'>Create groups</NavLink>
        <NavLink to="/mygroups" className='px-2 py-4 hover:bg-gray-200 rounded'>My groups</NavLink>
        {user
            ?
            ""
            :
            <>
                <NavLink to="/login" className='px-2 py-4 hover:bg-gray-200 rounded'>Log In</NavLink>
                <NavLink to="/register" className='px-2 py-4 hover:bg-gray-200 rounded'>Register</NavLink>
            </>}
    </>

    const handleLogout = () => {
        signOutUser()
    }

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
                <div className='flex gap-1 items-center'>
                    <img src="/logo.jpeg" className='h-[70px] w-[70px] rounded-2xl' />
                    <a className="btn btn-ghost hidden md:flex text-xl">Hobby Hub</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end space-x-1">
                {user ?
                    <>
                        <div className='relative group w-[70px] h-[70px] mr-3'>
                            <img src={user.photoURL ? user.photoURL : matchUser.photo} alt="" className='w-full h-full rounded-2xl object-cover' />
                            <h3 className='absolute top-0 left-0 w-full h-full text-white bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-50 duration-300 rounded-2xl'>{user.displayName ? user.displayName : matchUser.name}</h3>
                        </div>
                        <button onClick={handleLogout} className='btn'>Log Out</button>
                    </>
                    : ""}
                <button className="btn btn-active" onClick={toggleTheme}>
                     {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>
            </div>
        </div>
    );
};

export default Navbar;