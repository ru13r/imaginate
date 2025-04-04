import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Keyboard, EffectFade, Navigation } from 'swiper/modules';
import Slide from './Slide';
import { sample } from './sample.ts';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/keyboard';
import './Viewer.css'

const Viewer = () => {
    return (
        <Swiper
            modules={[Pagination, Keyboard, EffectFade, Navigation]}
            keyboard={{ enabled: true }}
            spaceBetween={0}
            navigation
            breakpoints={{
                1024: {
                    navigation: { enabled: true }
                }
            }}
            slidesPerView={1}
            effect={'fade'}
            speed={1000}
            fadeEffect={{crossFade: true}}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
                swiper.on('keyPress', (swiper, keyCode) => {
                    if (parseInt(keyCode) === 13 || parseInt(keyCode) === 32) {
                        swiper.slideNext();
                    } else if (parseInt(keyCode) === 8) {
                        swiper.slidePrev();
                    }
                });
                swiper.on('click', (swiper) => {
                    if (swiper.clickedIndex !== undefined) {
                        swiper.slideTo(swiper.clickedIndex + 1);
                    }
                });
            }}
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