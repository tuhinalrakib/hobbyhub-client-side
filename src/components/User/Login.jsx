import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    const handleLogin = e =>{
        e.preventDefault()
    }

    return (
        <div className="card bg-fuchsia-900 text-white w-full max-w-sm mx-auto my-10 p-5 shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleLogin} className="fieldset">
                    {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                    <p className='font-bold'>Don't have an account Click <Link to="/register" className='text-lime-500'>Here</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;