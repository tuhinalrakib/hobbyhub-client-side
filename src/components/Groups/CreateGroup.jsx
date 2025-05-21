import React, { use, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import Loading from "../Loading";

const hobbyOptions = [
    "Drawing & Painting",
    "Photography",
    "Video Gaming",
    "Fishing",
    "Programming",
    "Cooking",
    "Reading",
    "Writing"
];

const CreateGroup = () => {
    const { user, loading } = use(AuthContext)
    console.log(user)

    if (loading) {
        return <Loading></Loading>
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add API POST call here
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-mint-500 to-blue-500 px-4">
            <div className="backdrop-blur-sm bg-white/10 border border-white/30 rounded-2xl shadow-xl p-8 w-full max-w-lg md:max-w-2xl text-[#000000]">
                <h1 className="text-3xl font-bold font-playwrite text-center mb-6">Create Hobby Group</h1>
                <form className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* Group Name */}
                        <div>
                            <label className="block mb-1 text-sm font-medium">Group Name</label>
                            <input
                                type="text"
                                name="groupName"
                                placeholder="Enter Your Group Name"
                                className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                                required
                            />
                        </div>
                        {/* Hobby Category */}
                        <div>
                            <label className="block mb-1 text-sm font-medium">Hobby Category</label>
                            <select name="hobbyCategory" required className="w-full bg-white text-black p-2">
                                <option value="">Select a category</option>
                                {hobbyOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        {/* Description */}
                        <div>
                            <label className="block mb-1 text-sm font-medium">Description</label>
                            <textarea
                                type="text"
                                name="description"
                                placeholder="Enter Your group description"
                                className="w-full bg-white text-black placeholder-gray-500"
                                required
                            />
                        </div>
                        {/* Meeting Location */}
                         <div>
                            <label className="block mb-1 text-sm font-medium">Meeting Location</label>
                            <input
                                type="text"
                                name="meetingLocation"
                                placeholder="Enter group Meeting Location"
                                className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                                required
                            />
                        </div>
                        {/* Meeting Location */}
                         <div>
                            <label className="block mb-1 text-sm font-medium">Meeting Location</label>
                            <input
                                type="text"
                                name="meetingLocation"
                                placeholder="Enter group Meeting Location"
                                className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                                required
                            />
                        </div>
                        {/* Meeting Location */}
                         <div>
                            <label className="block mb-1 text-sm font-medium">Meeting Location</label>
                            <input
                                type="text"
                                name="meetingLocation"
                                placeholder="Enter group Meeting Location"
                                className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-full transition duration-300">
                        Register
                    </button>
                </form>
            </div>
        </div>

        // <form onSubmit={handleSubmit}>
        //   <h2>Create Hobby Group</h2>

        //   <label></label>
        //   <input type="text" name="meetingLocation" value={form.meetingLocation} onChange={handleChange} required />

        //   <label>Max Members</label>
        //   <input type="number" name="maxMembers" value={form.maxMembers} onChange={handleChange} required />

        //   <label>Start Date</label>
        //   <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required />

        //   <label>Image URL</label>
        //   <input type="url" name="imageUrl" value={form.imageUrl} onChange={handleChange} />

        //   <label>User Name</label>
        //   <input type="text" name="userName" value={form.userName} readOnly />

        //   <label>User Email</label>
        //   <input type="text" name="userEmail" value={form.userEmail} readOnly />

        //   <button type="submit">Create</button>
        // </form>
    );
};

export default CreateGroup;
