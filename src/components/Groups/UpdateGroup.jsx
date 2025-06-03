import React, { use } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';

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

const UpdateGroup = () => {
    const { loading } = use(AuthContext)
    const navigate = useNavigate()

    const userData = useLoaderData()
    const {
        _id,
        name,
        startdate,
        description,
        email,
        groupName,
        hobbyCategory,
        maxmembers,
        photo,
        meetingLocation

    } = userData

    if (loading) {
        return <Loading></Loading>
    }

    const updateGroup = e => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries())
        fetch(`https://hobbyhub-server.onrender.com/groups/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Your Group updated successfully.",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate("/mygroups")
                }
            })
    }

    return (
        <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-purple-700 via-mint-500 to-blue-500 px-4">
            <div className="backdrop-blur-sm my-10 bg-white/10 border border-white/30 rounded-2xl shadow-xl p-8 w-full max-w-lg md:max-w-2xl text-[#000000]">
                <h1 className="text-3xl font-bold font-playwrite text-center mb-6">Update Your Group</h1>
                <form onSubmit={updateGroup} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {/* Group Name */}
                        <div>
                            <label className="block mb-1 text-sm font-medium">Group Name</label>
                            <input
                                type="text"
                                name="groupName"
                                placeholder="Enter Your Group Name"
                                defaultValue={groupName}
                                className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                                required
                            />
                        </div>
                        {/* Hobby Category */}
                        <div>
                            <label className="block mb-1 text-sm font-medium">Hobby Category</label>
                            <select name="hobbyCategory" required className="w-full bg-white text-black p-2" defaultValue={hobbyCategory}>
                                <option value="">Select a category</option>
                                {hobbyOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        </div>
                        {/* Meeting Location */}
                        <div>
                            <label className="block mb-1 text-sm font-medium">Meeting Location</label>
                            <input
                                type="text"
                                name="meetingLocation"
                                placeholder="Enter group Meeting Location"
                                className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                                defaultValue={meetingLocation}
                                required
                            />
                        </div>
                        {/* Max Members */}
                        <div>
                            <label className="block mb-1 text-sm font-medium">Max Members</label>
                            <input
                                type="number"
                                name="maxmembers"
                                placeholder="Enter the max Members"
                                className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                                defaultValue={maxmembers}
                                required
                            />
                        </div>
                        {/* Start Date */}
                        <div>
                            <label className="block mb-1 text-sm font-medium">Start Date</label>
                            <input
                                type="date"
                                name="startdate"
                                className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                                defaultValue={startdate}
                                required
                            />
                        </div>
                        {/* Image URL */}
                        <div>
                            <label className="block mb-1 text-sm font-medium">Image URL</label>
                            <input
                                type="url"
                                name="photo"
                                placeholder="https://abc.com"
                                className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                                defaultValue={photo}
                                required
                            />
                        </div>
                        {/* User name */}
                        <div>
                            <label className="block mb-1 text-sm font-medium">User name</label>
                            <input
                                type="text"
                                name="name"
                                defaultValue={name}
                                className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                                readOnly
                            />
                        </div>
                        {/* User Email */}
                        <div>
                            <label className="block mb-1 text-sm font-medium">User Email</label>
                            <input
                                type="email"
                                name="email"
                                defaultValue={email}
                                className="input input-bordered w-full bg-white text-black placeholder-gray-500"
                                readOnly
                            />
                        </div>
                    </div>
                    {/* Description */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Description</label>
                        <textarea
                            type="text"
                            name="description"
                            placeholder="Enter Your group description"
                            className="w-full p-2 rounded-xl bg-white text-black placeholder-gray-500"
                            defaultValue={description}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-full transition duration-300">
                        Update
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateGroup;