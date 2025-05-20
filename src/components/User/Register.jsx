import React from 'react';

const Register = () => {
    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target 
        const formData = new FormData(form)
        const {email, password,...restData} = Object.fromEntries(formData.entries())
        console.log(email,password)
        console.log(restData)
    }
    return (
        <div className="card bg-fuchsia-900 text-white w-full max-w-sm mx-auto my-10 p-5 shrink-0 shadow-2xl">
            <h1 className="text-3xl font-bold text-center">Register now!</h1>
            <div className="card-body">
                <form onSubmit={handleRegister} className="fieldset">
                    {/* Name */}
                    <label className="label">Your Name</label>
                    <input type="text" className="input text-black" placeholder="Enter Your Name" name='name'/>
                    {/* Email */}
                    <label className="label">Email</label>
                    <input type="email" className="input text-black" placeholder="Email" name='email'/>
                    {/* Photo URL */}
                    <label className="label">Photo URL</label>
                    <input type="url" className="input text-black" placeholder="Enter Your Photo URL" name='photo'/>
                    {/* Password */}
                    <label className="label">Password</label>
                    <input type="password" className="input text-black" placeholder="Password" name='password'/>
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button type="submit" className="btn btn-neutral bg-indigo-900 text-xl font-bold mt-4">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;