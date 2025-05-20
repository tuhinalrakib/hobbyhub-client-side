import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
                        <div className="flex w-full h-[400px]">
                            <div className="bg-cyan-500 bg-opacity-50 flex flex-col justify-center px-10 text-white">
                                <h2 className="text-4xl font-bold mb-2">{slide.title}</h2>
                                <p className="text-lg max-w-xl">{slide.description}</p>
                            </div>
                            <div>
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-full  object-contain"
                                />
                            </div>
                            {/* */}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Home;