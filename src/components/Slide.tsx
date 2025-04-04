import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

type SlideProps = {
    image: string;
    paragraphs: string[];
}


const Slide: React.FC<SlideProps> = ({ paragraphs, image }) => {
    return (
        <>
            {/* Desktop layout: both parts side-by-side */}
            <div className="hidden lg:flex h-screen">
                <div className="w-1/2">
                    <img src={`${image}`} alt={image} className="h-full w-full object-cover" />
                </div>
                <div className="w-1/2 flex items-start pt-10">
                    <div className="p-4">
                        {paragraphs.map((text, index) => (
                            <p
                                key={index}
                                className="font-serif text-xl text-gray-700 p-4 pr-10 ml-12 max-w-[52ch]"
                            >
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile layout: use a nested Swiper */}
            <div className="lg:hidden h-screen">
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                >
                    <SwiperSlide>
                        <div className="h-screen flex items-start pt-10">
                            <div className="p-1">
                                {paragraphs.map((text, index) => (
                                    <p
                                        key={index}
                                        className="font-serif text-[16pt] md:text-[20pt] text-gray-700 p-1 pr-10 ml-12"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-screen">
                            <img src={`${image}`} alt={image} className="h-full w-full object-cover" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
export default Slide;