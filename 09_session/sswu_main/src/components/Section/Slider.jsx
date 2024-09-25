import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../../assets/img/png/slider01.png';
import slide2 from '../../assets/img/png/slider02.png';
import slide3 from '../../assets/img/png/slider03.png';
import slide4 from '../../assets/img/png/slider04.png';

const Slider = () => {
    const slideItems = [slide1, slide2, slide3, slide4]

    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{
                clickable: true,
            }}
            loop={true}
            slidesPerView={1}
            autoplay={{
                delay: 5000,
                disableOnInteraction: false,
            }}
        >
            {slideItems.map((item) => (
                <SwiperSlide>
                    <img src={item} alt={item} className="slide_img" />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

export default Slider