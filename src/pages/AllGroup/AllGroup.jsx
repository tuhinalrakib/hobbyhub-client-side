import React, { use } from 'react';
import GroupCard from './GroupCard';
import { AuthContext } from '../../contexts/AuthContext';
import { useLoaderData } from 'react-router';
import Loading from '../../components/Loading';

// const promise = .then(res => res.json())

const AllGroup = () => {
    const {loading} = use(AuthContext)
    const data = useLoaderData()
    if(loading){
        return <Loading />
    }

    return (
        <div className='min-h-screen'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 w-[80%] mx-auto mt-10'>
                {
                    data.map(group => <GroupCard group={group} key={group._id}></GroupCard>)
                }
            </div>
        </div>
    );
};

export default AllGroup;