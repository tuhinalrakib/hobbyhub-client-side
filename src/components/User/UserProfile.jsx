import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../Navbar';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../Loading';

const UserProfile = () => {
    const {loading} = use(AuthContext)

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
          <Navbar></Navbar>  
        </div>
    );
};

export default UserProfile;