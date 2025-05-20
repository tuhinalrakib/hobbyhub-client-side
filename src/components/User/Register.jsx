import React, { use, useState } from 'react';
import { Link, Navigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext';
import Swal from 'sweetalert2';

const Register = () => {
  const { signUpUser, setUser } = use(AuthContext)
  const [error, setError] = useState("")

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(formData.entries());
    console.log(email, password);
    // console.log(restData);

    const passwordRegExpD = /(?=.*\d)/
    const passswordRegExpL = /(?=.*[a-z])/
    const passswordRegExpU = /(?=.*[A-Z])/
    const passswordRegExpN = /.{6,}/

    if (passswordRegExpN.test(password) === false) {
      setError("Password must be more than 6 characters")
      return
    } else if (passwordRegExpD.test(password) === false) {
      setError("Passowrd must be number")
      return
    } else if (passswordRegExpL.test(password) === false) {
      setError("Password must be at least one lowercase letter")
      return
    } else if (passswordRegExpU.test(password) === false) {
      setError("Passowrd must be at least one Uppercase letter")
      return
    }

    const {name, photo} = restFormData

    signUpUser(email, password)
      .then(result => {
        const user = result.user
        setUser({ ...user, displayName : name, photoURL : photo})
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime
        }
        Navigate("/")

        // save profile info in the db
        fetch('https://hobbyhub-server-2m0r01zop-tuhinalrakibs-projects.vercel.app/users', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(userProfile)
        })
          .then(res => res.json())
          .then(data => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your account is created.",
                showConfirmButton: false,
                timer: 1500
              })
            }
          })
      })
      .catch(e => {
        setError(e.message)
      })
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
          {
            error && <p className='text-purple-900 text-center'>{error}</p>
          }
        </form>
      </div>
    </div>
  );
};

export default Register;
