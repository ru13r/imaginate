import * as React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {EffectFade} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';

type SlideProps = {
    image: string;
    paragraphs: string[];
}


const Slide: React.FC<SlideProps> = ({ paragraphs, image }) => {
    return (
        <>
            {/* Desktop layout: both parts side-by-side */}
            <div className="hidden lg:flex h-dvh">
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
            <div className="h-dvh lg:hidden">
                <Swiper
                    modules={[EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    effect={'fade'}
                    speed={1000}
                    fadeEffect={{crossFade: true}}
                >
                    <SwiperSlide>
                        <div className="h-dvh flex items-start pt-10">
                            <div className="p-1">
                                {paragraphs.map((text, index) => (
                                    <p
                                        key={index}
                                        className="font-serif text-lg lg:text-xl text-gray-700 p-1 pr-10 ml-12"
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="h-dvh">
                            <img src={`${image}`} alt={image} className="h-full w-full object-cover" />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}
export default Slide;