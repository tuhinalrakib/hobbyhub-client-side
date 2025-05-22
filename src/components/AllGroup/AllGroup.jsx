import React, { use } from 'react';
import GroupCard from './GroupCard';
import { AuthContext } from '../../contexts/AuthContext';
import Loading from '../Loading';
import { useLoaderData } from 'react-router';

// const promise = .then(res => res.json())

const AllGroup = () => {
    const {loading} = use(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    const data = useLoaderData()

    return (
        <div className='min-h-screen'>
            <div className='grid grid-cols-3 gap-2 w-[80%] mx-auto mt-10'>
                {
                    data.map(group => <GroupCard group={group} key={group._id}></GroupCard>)
                }
            </div>
        </div>
    );
};

export default AllGroup;