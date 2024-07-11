import React from 'react'
import SwiperComponent from '../swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import '../assets/scss/style.scss'

import main1 from '../assets/img/main1.png'
import main2 from '../assets/img/main2.png'
import main3 from '../assets/img/main3.png'
import main4 from '../assets/img/main4.png'
import main5 from '../assets/img/main5.png'

import { styled } from '@mui/system';

const images = [
    { src: main1, title: '24 NEW 인터런' },
    { src: main2, title: 'FILA ECHAPPE' },
    { src: main3, title: 'COLD WAVE T-SHIRTS' },
    { src: main4, title: 'FILA WHITE LINE' },
    { src: main5, title: 'PEITO' },
];

const CustomButton = styled('button')({
    position: 'absolute',
    bottom: '50px',
    left: '120px',
    zIndex: 10,
    backgroundColor: 'transparent',
    border: '1px solid #fff',
    color: 'white',
    borderRadius: '30px',
    padding: '15px 50px',
    fontSize: '20px',
    cursor: 'pointer',
});

const Main = () => {
    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    el: '.custom-pagination',
                    renderBullet: (index, className) => {
                        return `<span class="${className} custom-bullet"></span>`;
                    }
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                className="mySwiper"
            >
                {images.map((item, index) => (
                    <SwiperSlide key={index}>
                        <img src={item.src} alt={`slide-${index}`} />
                        <div className="slide-title">{item.title}</div>
                        {index === 0 && (
                            <CustomButton>자세히 보기</CustomButton>
                        )}
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="custom-pagination"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <SwiperComponent />
        </>
    )
}

export default Main