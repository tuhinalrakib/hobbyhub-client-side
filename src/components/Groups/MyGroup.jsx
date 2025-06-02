import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useLoaderData, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
// import Lottie from 'lottie-react';

const MyGroup = () => {
    const data = useLoaderData()
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()

    const userGroups = data.filter(item => item.email === user.email);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // start deleting the coffee
                fetch(`https://hobbyhub-server.onrender.com/groups/${_id}`, {
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

                            navigate("/")
                        }
                    })


            }
        });

    }

    return (
        <div className='min-h-screen p-4 '>

            {userGroups.length > 0 ? (
                <div className="overflow-x-auto w-[90%] mx-auto">
                    <table className="table shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-fuchsia-900 text-white">
                            <tr>
                                <th className="text-left">Group Name</th>
                                <th className="text-left">Category</th>
                                <th className="text-left">Max Members</th>
                                <th className="text-left">Location</th>
                                <th className="text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userGroups.map(group => (
                                <tr key={group._id} className="border-t bg-base-200">
                                    <td >{group.groupName}</td>
                                    <td >{group.hobbyCategory}</td>
                                    <td >{group.maxmembers}</td>
                                    <td >{group.meetingLocation}</td>
                                    <td className="join join-vertical space-y-1">
                                        <Link to={`/groups/${group._id}`}><button className='btn btn-xs join-item'>View</button></Link>
                                        <Link to={`/updateGroup/${group._id}`}><button className='btn btn-xs join-item'>Edit</button></Link>
                                        <button onClick={() => handleDelete(group._id)} className='btn btn-xs join-item'>X</button>
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


{/* <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    // <thead>
    //   <tr>
    //     <th></th>
    //     <th>Name</th>
    //     <th>Job</th>
    //     <th>Favorite Color</th>
    //   </tr>
    // </thead>
    // <tbody>
    //   {/* row 1 */}
    //   <tr>
    //     <th>1</th>
    //     <td>Cy Ganderton</td>
    //     <td>Quality Control Specialist</td>
    //     <td>Blue</td>
    //   </tr>
    // </tbody>
//   </table>
// </div> */}
