import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import Navbar from '../../components/Navbar';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../../components/Loading';

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