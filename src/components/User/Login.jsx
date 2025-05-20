import React from 'react';

const Login = () => {
    return (
        <div className="card bg-fuchsia-900 text-white w-full max-w-sm mx-auto my-10 p-5 shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center">Register now!</h1>
            <div className="card-body">
                <fieldset className="fieldset">
                    {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
            </div>
        </div>
    );
};

export default Login;