import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { useLoaderData } from 'react-router';
// import Lottie from 'lottie-react';

const MyGroup = () => {
    const data = useLoaderData()
    const { user } = useContext(AuthContext);

    const userGroups = data.filter(item => item.email === user.email);

    return (
        <div className='min-h-screen p-4'>

            {userGroups.length > 0 ? (
                <div className="overflow-x-auto w-[90%] mx-auto">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-fuchsia-900 text-white">
                            <tr>
                                <th className="py-2 px-4 text-left">Group Name</th>
                                <th className="py-2 px-4 text-left">Category</th>
                                <th className="py-2 px-4 text-left">Max Members</th>
                                <th className="py-2 px-4 text-left">Location</th>
                                <th className="py-2 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userGroups.map(group => (
                                <tr key={group._id} className="border-t">
                                    <td className="py-2 px-4">{group.groupName}</td>
                                    <td className="py-2 px-4">{group.hobbyCategory}</td>
                                    <td className="py-2 px-4">{group.maxmembers}</td>
                                    <td className="py-2 px-4">{group.meetingLocation}</td>
                                    <td className="py-2 px-4">
                                        <a 
                                            href={`/groups/${group._id}`}
                                            className="text-fuchsia-900 underline"
                                        >
                                            View
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center text-gray-600 mt-12">
                    <p>No groups found.</p>
                </div>
            )}
        </div>
    );
};

export default MyGroup;
