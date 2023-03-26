import React from "react";
import "./Slider.css"
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Autoplay } from 'swiper';
import {SlidesType} from "../../Pages/Restaurant/Restaurant";

type SliderType = {
    slides: SlidesType[]
}

export const Slider = (props: SliderType) => {

    return (
        <div className="main-container">
            <div className="Slider">
                <Swiper
                    modules={[Autoplay]}
                    slidesPerView={1}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false
                    }}
                    loop={true}
                >
                    {props.slides.map((slide, index) => <SwiperSlide key={index}><img className="Slider" src={slide.url} alt={slide.title}/></SwiperSlide>) }
                </Swiper>
            </div>
        </div>
    )
}