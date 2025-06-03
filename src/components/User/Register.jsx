import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet';

const Register = () => {
  const { signUpUser } = useContext(AuthContext)
  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    setError('');
    
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(formData.entries());

    // Password Validation
    const hasNumber = /(?=.*\d)/;
    const hasLowercase = /(?=.*[a-z])/;
    const hasUppercase = /(?=.*[A-Z])/;
    const hasMinLength = /.{6,}/;

    if (!hasMinLength.test(password)) {
      const message = "Password must be at least 6 characters long";
      setError(message);
      toast.error(message);
      return;
    }
    if (!hasNumber.test(password)) {
      const message = "Password must contain at least one number";
      setError(message);
      toast.error(message);
      return;
    }
    if (!hasLowercase.test(password)) {
      const message = "Password must contain at least one lowercase letter";
      setError(message);
      toast.error(message);
      return;
    }
    if (!hasUppercase.test(password)) {
      const message = "Password must contain at least one uppercase letter";
      setError(message);
      toast.error(message);
      return;
    }

    try {
      const res = await fetch(`https://hobbyhub-server.onrender.com/users`);
      const existingUsers = await res.json();
      const existingUser = existingUsers.find(user => user.email === email);

      if (existingUser) {
        const message = "User already exists";
        setError(message);
        toast.error(message);
        return navigate("/login");
      }

      // Firebase Sign Up
      const result = await signUpUser(email, password);
      const user = result.user;

      const userProfile = {
        email,
        ...restFormData,
        creationTime: user?.metadata?.creationTime,
        lastSignInTime: user?.metadata?.lastSignInTime,
      };

      // Save to DB
      const dbRes = await fetch('https://hobbyhub-server.onrender.com/users', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userProfile),
      });

      const dbData = await dbRes.json();

      if (dbData.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account has been created.",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setError(err.message || "Registration failed.");
      toast.error(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 px-4 py-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register Page</title>
      </Helmet>
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
