import React from "react";
import { Typewriter } from "react-simple-typewriter";
import FeaturedGroups from "../pages/FeaturedGroups ";
import CommunityGuidelines from "../pages/CommunityGuidelines";
import JoinNewsletter from "../pages/JoinNewsletter";
import Slider from "../pages/Slider";



const Home = () => {
    return (
        <div className="min-h-screen ">
            <h1 className="text-xl md:text-2xl lg:text-4xl text-center text-emerald-700 my-7">HobbyHub: A Hobby Group Organizer,You<span className="text-indigo-900 font-bold"> <Typewriter
            words={["Attend Group","See Group","Manage Group"]} 
            cursor 
            cursorStyle = "|"
            cursorBlinking = "true"
            loop = "false"
            /></span>
            </h1>
            
            {/*  */}
            <Slider></Slider>
            <FeaturedGroups></FeaturedGroups>
            <CommunityGuidelines></CommunityGuidelines>
            <JoinNewsletter></JoinNewsletter>
        </div>
    );
};

export default Home;