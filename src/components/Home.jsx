import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Typewriter } from "react-simple-typewriter";

const slides = [
    {
        image: "https://i.postimg.cc/KztsvKZN/pexels-icsa-833425-1708912.jpg",
        title: "Discover Local Groups",
        description: "Explore hobby groups around you – from knitting clubs to hiking crews. Find your people."
    },
    {
        image: "https://i.postimg.cc/KztsvKZN/pexels-icsa-833425-1708912.jpg",
        title: "Join or Start a Group",
        description: "Whether you’re joining a group or starting one, HobbyHub makes it simple to connect."
    },
    {
        image: "https://i.postimg.cc/KztsvKZN/pexels-icsa-833425-1708912.jpg",
        title: "Make Real Connections",
        description: "HobbyHub is more than events – it’s about building meaningful relationships through shared interests."
    }
];

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
            
            <div className="w-full rounded-xl overflow-hidden shadow-xl p-5">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    loop={true}
                    className="mySwiper"
                >
                    {slides.map((slide, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="flex justify-center w-full h-[400px]">
                                <div className=" bg-cyan-500 bg-opacity-50 flex flex-col justify-center px-1 md:px-10 text-white">
                                    <h2 className="text-xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                                    <p className="text-sm md:text-lg max-w-xl">{slide.description}</p>
                                </div>
                                <div className="">
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className="w-full h-full object-cover md:object-contain"
                                    />
                                </div>
                                {/* */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Home;