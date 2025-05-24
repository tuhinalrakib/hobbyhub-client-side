import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
    {
        image: "https://i.postimg.cc/MZyzxZDz/pexels-mvdheuvel-2284166.jpg",
        title: "Discover Local Groups",
        description: "Explore hobby groups around you – from knitting clubs to hiking crews. Find your people."
    },
    {
        image: "https://i.postimg.cc/KYJm60rB/pexels-samsilitongajr-694587.jpg",
        title: "Join or Start a Group",
        description: "Whether you’re joining a group or starting one, HobbyHub makes it simple to connect."
    },
    {
        image: "https://i.postimg.cc/KztsvKZN/pexels-icsa-833425-1708912.jpg",
        title: "Make Real Connections",
        description: "HobbyHub is more than events – it’s about building meaningful relationships through shared interests."
    }
];

const Slider = () => {
    return (
        <div>
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
                            <div
                                className={"relative w-full h-[400px] flex items-center justify-center text-white bg"}
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: 'contain',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                                <div className="bg-black bg-opacity-.80 p-4 md:p-10 rounded-lg text-center max-w-3xl">
                                    <h2 className="text-xl md:text-4xl font-bold mb-2">{slide.title}</h2>
                                    <p className="text-sm md:text-lg">{slide.description}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;