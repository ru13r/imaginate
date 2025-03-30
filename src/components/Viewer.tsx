import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, EffectFade } from 'swiper/modules';
import Slide from './Slide';
import { sample } from './sample.ts';
// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Viewer.css'

const Viewer = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Keyboard, EffectFade]}
            keyboard={{ enabled: true }}
            spaceBetween={0}
            slidesPerView={1}
            effect={'fade'}
            speed={1000}
            fadeEffect={{crossFade: true}}
            navigation
            pagination={{ clickable: true }}
        >
            {sample.map((slide, index) => (
                <SwiperSlide key={index}>
                    <Slide image={slide.image} paragraphs={slide.paragraphs} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
export default Viewer;