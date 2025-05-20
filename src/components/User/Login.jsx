import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';

const Login = () => {
    const handleLogin = e => {
        e.preventDefault();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 px-4">
            <div className="backdrop-blur-sm bg-white/10 border border-white/30 rounded-2xl shadow-xl p-8 w-full max-w-md text-white">
                <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>
                <form onSubmit={handleLogin} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                            placeholder="you@example.com"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                            placeholder="••••••••"
                        />
                    </div>
                    <div className="flex justify-between text-sm text-gray-200">
                        <label><input type="checkbox" className="mr-1" /> Remember me</label>
                        <a href="#" className="hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary w-full transition duration-300">Login</button>    
                    <div className="flex flex-col justify-center items-center gap-4">
                        <button  className="flex items-center justify-center gap-2 bg-[#DB4437] hover:opacity-90 px-4 py-2 text-white rounded-md w-40 text-xl cursor-pointer">
                            <FaGoogle size={24} />
                            Google
                        </button>
                    </div>
                    <p className="mt-4 text-sm text-center text-gray-300">
                        Don't have an account?{' '}
                        <Link to="/register" className="font-semibold text-white underline hover:text-gray-200">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
