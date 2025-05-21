import React, { use, useState } from 'react';
import { Link, Navigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';

const Register = () => {
  const { signUpUser, setUser } = use(AuthContext)
  const [error, setError] = useState('')

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(formData.entries());
    // console.log(email, password);
    console.log(restFormData);

    // Password Validation
    const passwordRegExpD = /(?=.*\d)/
    const passswordRegExpL = /(?=.*[a-z])/
    const passswordRegExpU = /(?=.*[A-Z])/
    const passswordRegExpN = /.{6,}/

    if (passswordRegExpN.test(password) === false) {
      const message = "Password must be more than 6 characters"
      setError(message)
      toast(message)
      return
    } else if (passwordRegExpD.test(password) === false) {
      const message = "Passowrd must be number"
      setError(message)
      toast(message)
      return
    } else if (passswordRegExpL.test(password) === false) {
      const message = "Password must be at least one lowercase letter"
      setError(message)
      toast(message)
      return
    } else if (passswordRegExpU.test(password) === false) {
      const message = "Passowrd must be at least one Uppercase letter"
      setError(message)
      toast(message)
      return
    }
    const { name, photo } = restFormData

    // firebase SignUp
    signUpUser(email, password)
      .then(result => {
        const user = result.user
        setUser({ ...user, displayName: name, photoURL: photo })

        const userProfile = {
          email,
          ...restFormData,
          creationTime: user?.metadata?.creationTime,
          lastSignInTime: user?.metadata?.lastSignInTime
        }

        // send DB
        fetch('https://hobbyhub-server.vercel.app/users', {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(userProfile)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            Navigate("/")
          })
      })
      .catch(e => {
        setError(e.message)
      })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 px-4 py-5">
      <div className="backdrop-blur-sm bg-white/10 border border-white/30 rounded-2xl shadow-xl p-8 w-full max-w-md text-white">
        <h1 className="text-3xl font-bold text-center mb-6">Register Now!</h1>
        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className="input input-bordered w-full bg-white text-black placeholder-gray-500"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="input input-bordered w-full bg-white text-black placeholder-gray-500"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block mb-1 text-sm font-medium">Photo URL</label>
            <input
              type="url"
              name="photo"
              placeholder="Enter Your Photo URL"
              className="input input-bordered w-full bg-white text-black placeholder-gray-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              className="input input-bordered w-full bg-white text-black placeholder-gray-500"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full transition duration-300">
            Register
          </button>
          <p className="mt-4 text-sm text-center text-gray-300">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-white underline hover:text-gray-200">
              Sign In
            </Link>
          </p>
          {
            error && <p className='text-purple-900 text-center'>{error}</p>
          }
        </form>
      </div>
    </div>
  );
};

export default Register;
