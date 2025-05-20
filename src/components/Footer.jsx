import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className=" bg-neutral text-neutral-content p-10">
                <div className='flex flex-col justify-center items-center'>
                    <h6 className="text-xl text-center mt-5">HobbyHub: A Local Hobby Group Organizer
                    </h6>
                    <p className='mt-4'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                    <div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;