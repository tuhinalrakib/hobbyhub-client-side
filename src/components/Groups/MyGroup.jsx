import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
// import Lottie from 'lottie-react';

const MyGroup = () => {
    const data = useLoaderData()
    const { user } = useContext(AuthContext);

    const userGroups = data.filter(item => item.email === user.email);

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {

                // start deleting the coffee
                fetch(`https://hobby-hub-server-ten.vercel.app/groups/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            
                        }
                    })


            }
        });

    }

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
                                    <td className="py-2 px-4 space-x-1">
                                        <Link to={`/groups/${group._id}`}><button className='btn btn-xs'>View</button></Link>
                                        <Link to={`/updateGroup/${group._id}`}><button className='btn btn-xs'>Edit</button></Link>
                                        <button onClick={()=>handleDelete(group._id)} className='btn btn-xs'>X</button>
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
