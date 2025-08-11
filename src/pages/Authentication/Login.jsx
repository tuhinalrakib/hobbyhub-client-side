import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet";
import useAuth from '../../hooks/useAuth';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { signInUser, googleLogin, theme } = useAuth()
    const { handleSubmit, register, formState: { errors } } = useForm()
    const [error, setError] = useState("")
    const [visible, setVisible] = useState(false)
    const navigate = useNavigate()

    const onSubmit = (data) => {
        const { email, password } = data

        signInUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            Swal.fire({
                icon: "success",
                position: "center",
                showConfirmButton: false,
                title: "Login Successfully",
                timer: 1500
            })
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
                const { displayName, photoURL, email } = user

                const userProfile = {
                    name: displayName,
                    email: email,
                    photo: photoURL,
                    creationTime: user?.metadata?.creationTime,
                    lastSignInTime: user?.metadata?.lastSignInTime
                }

                fetch(`https://hobbyhub-server.onrender.com/users`)
                    .then(res => res.json())
                    .then(result => {
                        const findData = result.find(item => item.email == email)
                        if (findData) {
                            navigate("/")
                        } else {
                            // send DB
                            fetch('https://hobbyhub-server.onrender.com/users', {
                                method: "POST",
                                headers: {
                                    "content-type": "application/json"
                                },
                                body: JSON.stringify(userProfile)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    if (data.insertedId) {
                                        Swal.fire({
                                            position: "top-end",
                                            icon: "success",
                                            title: "Google Sign in Sucessfully.",
                                            showConfirmButton: false,
                                            timer: 1500
                                        })
                                        navigate("/")
                                    }
                                })
                        }
                    })
            })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 px-4">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Login Page</title>
            </Helmet>
            <div className="backdrop-blur-sm bg-white/10 border border-white/30 rounded-2xl shadow-xl p-8 w-full max-w-md text-white">
                <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={`space-y-5 ${theme === "dark" ? "text-white" : "text-black"}`}>

                    {/* Email */}
                    <div>
                        <label className="label">Email</label>
                        <input
                            type="email"
                            {...register("email", { required: true })}
                            placeholder="Your Email"
                            className="input input-bordered w-full"
                        />
                        {errors.email && <p className="text-sm text-red-500 mt-1">Email is required</p>}
                    </div>

                    {/* Password */}
                    <div>
                        <label className="label">Password</label>
                        <div className="relative">
                            <input
                                type={visible ? "text" : "password"}
                                {...register("password",
                                    {
                                        required: "Password is Required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters"
                                        },
                                        validate: {
                                            hasUpperCase: (value) =>
                                                /[A-Z]/.test(value) || "Password must contain at least one uppercase letter",
                                            hasSpecialChar: (value) =>
                                                /[!@#$%^&*(),.?":{}|<>]/.test(value) || "Password must contain at least one special character"
                                        }
                                    })}
                                placeholder="Password"
                                className="input input-bordered w-full"
                            />
                            <button
                                type="button"
                                onClick={() => setVisible(!visible)} className="absolute cursor-pointer right-1 top-1.5">
                                {
                                    visible ? <FaEye size={24} /> : <FaEyeSlash size={24} />
                                }
                            </button>
                        </div>
                    </div>
                    {
                        errors.password && <p className="text-sm text-red-900 mt-1 font-bold">{errors.password.message}</p>
                    }
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
