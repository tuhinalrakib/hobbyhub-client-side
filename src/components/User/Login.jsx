import React, { use, useState } from 'react';
import { FaGoogle, FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
    const { signInUser, setUser, googleLogin } = use(AuthContext)
    const [error, setError] = useState("")
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()
    // console.log(signInUser)

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target
        const formData = new FormData(form)
        const { email, password } = Object.fromEntries(formData.entries())
        // console.log(email, password)

        signInUser(email, password)
            .then(result => {
                const user = result.user
                Swal.fire({
                    icon: "success",
                    position: "center",
                    showConfirmButton: false,
                    title: "Login Successfully",
                    timer: 1500
                })
                setUser(user)
                navigate("/")
            })
            .catch(e => {
                setError(e.message)
            })

    };

    const handleSignInGoogle = () => {
        googleLogin()
            .then(result => {
                const user = result.user
                setUser(user)
                navigate("/")
            })
    }

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
                            name='email'
                            required
                        />
                    </div>
                    {/* Password */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Password</label>
                        <div className='relative'>
                            <input
                                type={visible ? "text" : "password"}
                                name="password"
                                placeholder="••••••••"
                                className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setVisible(!visible)}
                                className='absolute right-1 top-1 text-black cursor-pointer'>
                                {visible ? <FaRegEye size={24}></FaRegEye> : <FaRegEyeSlash size={24}></FaRegEyeSlash>}
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-200">
                        <label><input type="checkbox" className="mr-1" /> Remember me</label>
                        <a href="#" className="hover:underline">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn btn-primary w-full transition duration-300">Login</button>
                    <p className="my-2 text-sm text-center text-gray-300">
                        Don't have an account?{' '}
                        <Link to="/register" className="font-semibold text-white underline hover:text-gray-200">Register</Link>
                    </p>
                    {
                        error && <p className='text-purple-900 text-center'>{error}</p>
                    }
                </form>
                    <div className="flex flex-col mt-2 justify-center items-center gap-4">
                        <button onClick={handleSignInGoogle} className="flex items-center justify-center gap-2 bg-[#DB4437] hover:opacity-90 px-4 py-2 text-white rounded-md w-70 text-xl cursor-pointer">
                            <FaGoogle size={24} />
                            Sign Up With Google
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Login;
