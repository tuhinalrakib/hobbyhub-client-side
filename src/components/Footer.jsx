import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <footer className=" bg-neutral text-neutral-content p-10">
                <div className='flex flex-col justify-center items-center'>
                    <h6 className="text-sm md:text-xl text-center mt-5">HobbyHub: A Local Hobby Group Organizer
                    </h6>
                    <div className='flex gap-1 md:gap-3 my-2 md:my-5'>
                       <a href="https://web.facebook.com/engrtuhin.roky?locale=bn_IN" target="_blank"><FaFacebook size={26} className='cursor-pointer'/></a>
                       <a href="https://github.com/tuhinalrakib" target='_blank'><FaGithub size={26} className='cursor-pointer'/></a>
                       <a href="https://www.linkedin.com/in/tuhin-al-rakib-5a4a71103/" target="_blank"><FaLinkedin size={26} className='cursor-pointer'/></a>
                    </div>
                    <p className='mt-1'>Copyright © {new Date().getFullYear()} - All right reserved</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;