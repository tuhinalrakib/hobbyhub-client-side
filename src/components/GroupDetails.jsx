import React from 'react';
import { Link, useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet';

const GroupDetails = () => {
    const data = useLoaderData()
    const {
        groupName,
        description,
        email,
        hobbyCategory,
        maxmembers,
        meetingLocation,
        name,
        startdate,
        photo
    } = data;
    console.log(data)
    return (
        <div className="max-w-sm mx-auto my-10 bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <Helmet>
                <title>{location.pathname.slice(1)}</title>
            </Helmet>
            <img 
                src={photo} 
                alt={groupName} 
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800 mb-2">{groupName}</h2>
                <p className='text-gray-600 mb-2'>Description: {description}</p>
                <div className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold">Category:</span> {hobbyCategory}
                </div>
                <div className="text-sm text-gray-700 mb-2">
                    <div><span className="font-semibold">Max Members:</span> {maxmembers}</div>
                    <div><span className="font-semibold mt-2">Location:</span> {meetingLocation}</div>
                </div>
                <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-800">Contact</h3>
                    <p className="text-sm text-gray-600">{name}</p>
                    <p className="text-sm text-blue-500">{email}</p>
                </div>
                <Link to="/"><button className='btn bg-fuchsia-900 w-full mt-3 text-xl font-semibold text-white'>Go To Home</button></Link>
            </div>
        </div>
    );
};

export default GroupDetails;