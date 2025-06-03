import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Loading from './Loading';
import { Tooltip } from 'react-tooltip';
import { NavLink } from 'react-router';

const Navbar = () => {
    const { user, signOutUser, loading } = useContext(AuthContext);
    const [theme, setTheme] = useState("light");
    const [data, setData] = useState(null);
    const [subscriptionLoading, setSubscriptionLoading] = useState(true);
   

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://hobbyhub-server.onrender.com/users?email=${user?.email}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch');
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                console.log(err.message);
            } finally {
                setSubscriptionLoading(false);
            }
        };

        fetchData();
    }, [user]); // empty dependency array = runs once on mount


    if (loading || subscriptionLoading) {
        return <Loading />;
    }

    console.log(data)
    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        document.documentElement.setAttribute("data-theme", newTheme);
    };

    const handleLogout = () => {
        signOutUser();
    };

    const links = (
        <>
            <NavLink to="/" className="px-2 py-4 hover:bg-gray-200 rounded mr-3">Home</NavLink>
            <NavLink to="/allgroup" className="px-2 py-4 hover:bg-gray-200 rounded mr-3">All Groups</NavLink>
            <NavLink to="/creategroup" className="px-2 py-4 hover:bg-gray-200 rounded mr-3">Create groups</NavLink>
            <NavLink to="/mygroups" className="px-2 py-4 hover:bg-gray-200 rounded">My groups</NavLink>
            {!user && (
                <>
                    <NavLink to="/login" className="px-2 py-4 hover:bg-gray-200 rounded">Log In</NavLink>
                    <NavLink to="/register" className="px-2 py-4 hover:bg-gray-200 rounded">Register</NavLink>
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <div className="flex gap-1 items-center">
                    <img src="/logo.jpeg" alt="Hobby Hub logo" className="h-[70px] w-[70px] rounded-2xl" />
                    <a className="btn btn-ghost hidden md:flex text-xl">Hobby Hub</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end space-x-1">
                {user && data && (
                    <>
                        <div className="relative group w-[70px] h-[70px] mr-3">
                            <img src={data?.photo} alt="User" className="w-full h-full rounded-2xl object-cover" />
                            <h3 className="absolute top-0 left-0 w-full h-full text-white bg-black bg-opacity-60 flex items-center justify-center opacity-0 group-hover:opacity-50 duration-300 rounded-2xl">
                                {data?.name}
                            </h3>
                        </div>
                        <button onClick={handleLogout} className="btn btn-sm md:btn">Log Out</button>
                    </>
                )}
                <button className="btn-sm md:btn btn-active" onClick={toggleTheme} data-tooltip-id="my-tooltip" data-tooltip-content="Change theme">
                    {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>
            </div>
            <Tooltip
                id="my-tooltip"
                place="bottom"
                style={{ backgroundColor: 'black', color: 'white' }}
            />
        </div>
    );
};

export default Navbar;
