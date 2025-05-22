import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../Navbar';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../Loading';

const UserProfile = () => {
    const {loading} = use(AuthContext)
    const data = useLoaderData()

    if(loading){
        return <Loading></Loading>
    }

    console.log(data)
    return (
        <div>
          <Navbar></Navbar>  
        </div>
    );
};

export default UserProfile;