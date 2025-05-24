import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router';
import { toast } from 'react-toastify';

const GroupCard = ({ group }) => {
    const location = useLocation();
    const {
        _id,
        groupName,
        hobbyCategory,
        maxmembers,
        meetingLocation,
        photo,
        startdate
    } = group;
    console.log(group)

    const isGroupActive = new Date(startdate) > new Date(); 

    const handleJoin = ()=>{
        toast("You Join This Group Successfully")
    }

    return (
        <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
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
                <div className="text-sm text-gray-700 mb-2">
                    <span className="font-semibold">Category:</span> {hobbyCategory}
                </div>
                <div className="text-sm text-gray-700 mb-2">
                    <div><span className="font-semibold">Max Members:</span> {maxmembers}</div>
                    <div><span className="font-semibold">Location:</span> {meetingLocation}</div>
                </div>
                <Link to={`/groups/${_id}`}>
                    <button className='btn bg-fuchsia-900 w-full text-xl font-semibold text-white mb-2'>
                        View Details
                    </button>
                </Link>
                {isGroupActive ? (
                        <button onClick={handleJoin} className='btn bg-green-700 w-full text-lg font-semibold text-white'>
                            Join Group
                        </button>
                ) : (
                    <p className="text-center text-red-600 font-medium mt-2">
                        This group is no longer active.
                    </p>
                )}
            </div>
        </div>
    );
};

export default GroupCard;
