import React from 'react';
import { Link } from 'react-router';

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restData } = Object.fromEntries(formData.entries());
    console.log(email, password);
    console.log(restData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 px-4">
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
        </form>
      </div>
    </div>
  );
};

export default Register;
