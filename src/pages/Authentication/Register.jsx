import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
// import { toast } from 'react-toastify';
// import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from 'react-helmet';
import useAxios from '../../hooks/useAxios';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';
import axios from 'axios';

const Register = () => {
  const { signUpUser, theme, updateUser } = useAuth()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [visible, setVisible] = useState(false)
  const [imageUrl, setImageUrl] = useState()
  const navigate = useNavigate()

  const handleImageUpload = async (e) => {
    const image = e.target.files[0]
    // Image upload in Cloudinary
    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "my_unsigned_preset");
    const res = await axios.post("https://api.cloudinary.com/v1_1/dxkmkskvy/image/upload", formData)
    const resData = res.data
    setImageUrl(resData.secure_url)
  }

  const onSubmit = (data) => {
    const { email, name, password } = data
    if (!imageUrl) {
      Swal.fire("Please wait", "Image is still uploading. Try again in a moment.", "info");
      return;
    }
    signUpUser(email, password)
    .then(res=>{
      if(res?.user){
        updateUser(name, imageUrl)
        .then(()=>{
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Account Create Successfully",
              showConfirmButton: false,
              timer: 1500
            });
            navigate("/")
        })
      }
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-600 to-blue-500 px-4 py-5">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register Page</title>
      </Helmet>
      <div className="backdrop-blur-sm bg-white/10 border border-white/30 rounded-2xl shadow-xl p-8 w-full max-w-md text-white">
        <h1 className="text-3xl font-bold text-center mb-6">Register Now!</h1>

        <form onSubmit={handleSubmit(onSubmit)} className={`space-y-5 ${theme === "dark" ? "text-white" : "text-black"}`}>
          {/* Name */}
          <div>
            <label className="label">Name</label>
            <input
              type="text"
              {...register("name", { required: true })}
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">Name is required</p>}
          </div>

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

          {/* Photo Upload */}
          <div>
            <label className="block font-medium mb-1">Upload Your Image</label>
            <input
              type="file"
              accept="image/*"
              // {...register("image", { required: true })}
              onChange={handleImageUpload}
              className="file-input file-input-bordered text-black w-full"
            />
            {/* {errors.image && <p className="text-red-500 text-sm">Image is required</p>} */}
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
