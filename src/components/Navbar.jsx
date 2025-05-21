import React, { use, useEffect, useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Loading from './Loading';

const Navbar = () => {
    const { user, signOutUser, loading } = use(AuthContext)
    const [display, setDisplay] = useState(null)

    if (loading) {
        return <Loading></Loading>
    }
    fetch(`http://localhost:3000/users/${user.email}`)
        .then(res => res.json())
        .then(data => {
            const { name, photo } = data
            setDisplay({ name, photo })
        })

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         if (!user?.email) return;
    //         try {
    //             const res = await ;
    //             const data = await res.json();
    //             setDisplay(data);
    //         } catch (err) {
    //             console.error("Failed to fetch user data:", err);
    //         }
    //     };

    //     fetchUserData();
    // }, [user?.email]);

    console.log(user)

    const links = <>
        <NavLink to="/" className='px-2 py-4 hover:bg-gray-200 rounded mr-3'>Home</NavLink>
        <NavLink to="/creategroup" className='px-2 py-4 hover:bg-gray-200 rounded mr-3'>Create groups</NavLink>
        <NavLink to="/allgroup" className='px-2 py-4 hover:bg-gray-200 rounded mr-3'>All Groups</NavLink>
        <NavLink to="/mygroup" className='px-2 py-4 hover:bg-gray-200 rounded'>My groups</NavLink>
        {user ? "" :
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
                {/* <img src="/logo.jpeg" alt="Hobby Hub" className='w-14 h-14 rounded-2xl'/> */}
                <div className='flex flex-col md:flex-row gap-1 justify-center items-center'>
                    <img src="/logo.jpeg" alt="Hobby Hub" className='w-10 h-10 rounded-2xl' />
                    <a className="btn btn-ghost text-xs md:text-xl">Hobby Hub</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <>
                        <div className='relative group w-[70px] h-[70px] mr-3'>
                            <img src={display?.photo} className='w-full h-full rounded-2xl object-cover' />
                            <h3 className='absolute top-0 left-0 w-full h-full text-white bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300 rounded-2xl'>{display?.name}</h3>
                        </div>
                        <button onClick={handleLogout} className='btn'>Log Out</button>
                    </>
                    : ""}
            </div>
        </div>
    );
};

export default Navbar;