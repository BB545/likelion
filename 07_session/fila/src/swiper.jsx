import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import coldT1 from './assets/img/coldT1.png'
import coldT2 from './assets/img/coldT2.png'
import coldT3 from './assets/img/coldT3.png'
import coldT4 from './assets/img/coldT4.png'
import coldT5 from './assets/img/coldT5.png'
import coldT6 from './assets/img/coldT6.png'
import coldT7 from './assets/img/coldT7.png'
import shoe1 from './assets/img/shoe1.png'
import shoe2 from './assets/img/shoe2.png'
import shoe3 from './assets/img/shoe3.png'
import shoe4 from './assets/img/shoe4.png'
import shoe5 from './assets/img/shoe5.png'
import shoe6 from './assets/img/shoe6.png'
import shoe7 from './assets/img/shoe7.png'
import shoe8 from './assets/img/shoe8.png'
import shortT1 from './assets/img/shortT1.png'
import shortT2 from './assets/img/shortT2.png'
import shortT3 from './assets/img/shortT3.png'
import shortT4 from './assets/img/shortT4.png'
import shortT5 from './assets/img/shortT5.png'
import shortT6 from './assets/img/shortT6.png'
import shortT7 from './assets/img/shortT7.png'
import shortT8 from './assets/img/shortT8.png'
import sand1 from './assets/img/sand1.png'
import sand2 from './assets/img/sand2.png'
import sand3 from './assets/img/sand3.png'
import sand4 from './assets/img/sand4.png'
import sand5 from './assets/img/sand5.png'
import sand6 from './assets/img/sand6.png'
import sand7 from './assets/img/sand7.png'
import sand8 from './assets/img/sand8.png'
import run1 from './assets/img/run1.png'
import run2 from './assets/img/run2.png'
import run3 from './assets/img/run3.png'
import run4 from './assets/img/run4.png'
import run5 from './assets/img/run5.png'
import run6 from './assets/img/run6.png'
import run7 from './assets/img/run7.png'

const coldTs = [
    { src: coldT1, title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { src: coldT2, title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { src: coldT3, title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { src: coldT4, title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { src: coldT5, title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { src: coldT6, title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
    { src: coldT7, title: '<COLD WAVE> 그래픽 프린트 냉감 티셔츠', price: '49,000원' },
];

const shoes = [
    { src: shoe1, title: '휠라 에샤페 VC', price: '89,000원' },
    { src: shoe2, title: '휠라 에샤페 VC', price: '89,000원' },
    { src: shoe3, title: '휠라 에샤페 VC', price: '89,000원' },
    { src: shoe4, title: '휠라 에샤페 VC', price: '89,000원' },
    { src: shoe5, title: '휠라 에샤페 VC', price: '89,000원' },
    { src: shoe6, title: '휠라 에샤페 VC', price: '89,000원' },
    { src: shoe7, title: '휠라 에샤페 VC', price: '89,000원' },
    { src: shoe8, title: '휠라 에샤페 VC', price: '89,000원' },
];

const shortTs = [
    { src: shortT1, title: '수피마 사이드배색 반팔티', price: '39,000원' },
    { src: shortT2, title: '수피마 사이드배색 반팔티', price: '39,000원' },
    { src: shortT3, title: '수피마 사이드배색 반팔티', price: '39,000원' },
    { src: shortT4, title: '수피마 사이드배색 반팔티', price: '39,000원' },
    { src: shortT5, title: '수피마 사이드배색 반팔티', price: '39,000원' },
    { src: shortT6, title: '수피마 사이드배색 반팔티', price: '39,000원' },
    { src: shortT7, title: '수피마 사이드배색 반팔티', price: '39,000원' },
    { src: shortT8, title: '수피마 사이드배색 반팔티', price: '39,000원' },
];

const sands = [
    { src: sand1, title: '슬릭워이비 샌들', price: '79,000원' },
    { src: sand2, title: '슬릭워이비 샌들', price: '79,000원' },
    { src: sand3, title: '슬릭워이비 샌들', price: '79,000원' },
    { src: sand4, title: '슬릭워이비 샌들', price: '79,000원' },
    { src: sand5, title: '슬릭워이비 샌들', price: '79,000원' },
    { src: sand6, title: '슬릭워이비 샌들', price: '79,000원' },
    { src: sand7, title: '슬릭워이비 샌들', price: '79,000원' },
    { src: sand8, title: '슬릭워이비 샌들', price: '79,000원' },
];

const runs = [
    { src: run1, title: '휠라 인터런', price: '99,000원' },
    { src: run2, title: '휠라 인터런', price: '79,000원' },
    { src: run3, title: '휠라 인터런', price: '99,000원' },
    { src: run4, title: '휠라 인터런', price: '99,000원' },
    { src: run5, title: '휠라 인터런', price: '99,000원' },
    { src: run6, title: '휠라 인터런', price: '99,000원' },
    { src: run7, title: '휠라 인터런', price: '99,000원' },
];

const SwiperComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const renderSwiper = () => {
        switch (activeIndex) {
            case 0:
                return (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={5}
                        slidesPerGroup={1}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        style={{ backgroundColor: 'white', height: '600px', paddingTop: '60px' }}
                    >
                        {coldTs.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.src} alt={`slide-${index}`} style={{ width: '345px', height: '460px' }} />
                                <div className="slide-title" style={{fontSize: '16px', fontWeight: 'bold', padding: '10px 0'}}>{item.title}</div>
                                <div className="slide-title">{item.price}</div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                );
            case 1:
                return (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={5}
                        slidesPerGroup={1}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        style={{ backgroundColor: 'white', height: '600px', paddingTop: '60px' }}
                    >
                        {shoes.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.src} alt={`slide-${index}`} style={{ width: '345px', height: '460px' }} />
                                <div className="slide-title" style={{fontSize: '16px', fontWeight: 'bold', padding: '10px 0'}}>{item.title}</div>
                                <div className="slide-title">{item.price}</div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                );
            case 2:
                return (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={5}
                        slidesPerGroup={1}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        style={{ backgroundColor: 'white', height: '600px', paddingTop: '60px' }}
                    >
                        {shortTs.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.src} alt={`slide-${index}`} style={{ width: '345px', height: '460px' }} />
                                <div className="slide-title" style={{fontSize: '16px', fontWeight: 'bold', padding: '10px 0'}}>{item.title}</div>
                                <div className="slide-title">{item.price}</div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                );
                case 3:
                return (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={5}
                        slidesPerGroup={1}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        style={{ backgroundColor: 'white', height: '600px', paddingTop: '60px' }}
                    >
                        {sands.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.src} alt={`slide-${index}`} style={{ width: '345px', height: '460px' }} />
                                <div className="slide-title" style={{fontSize: '16px', fontWeight: 'bold', padding: '10px 0'}}>{item.title}</div>
                                <div className="slide-title">{item.price}</div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                );
                case 4:
                return (
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={5}
                        slidesPerGroup={1}
                        centeredSlides={false}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        style={{ backgroundColor: 'white', height: '600px', paddingTop: '60px' }}
                    >
                        {runs.map((item, index) => (
                            <SwiperSlide key={index}>
                                <img src={item.src} alt={`slide-${index}`} style={{ width: '345px', height: '460px' }} />
                                <div className="slide-title" style={{fontSize: '16px', fontWeight: 'bold', padding: '10px 0'}}>{item.title}</div>
                                <div className="slide-title">{item.price}</div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                );
            default:
                return null;
        }
    };

    return (
        <div style={{ position: 'relative', top: '20px' }}>
            <h2 style={{ textAlign: 'center' }}>지금 많이 찾는 상품</h2>
            <ul>
                <li onClick={() => setActiveIndex(0)}># 냉감티셔츠</li>
                <li onClick={() => setActiveIndex(1)}># 에샤페</li>
                <li onClick={() => setActiveIndex(2)}># 반팔티셔츠</li>
                <li onClick={() => setActiveIndex(3)}># 페이토&샌들</li>
                <li onClick={() => setActiveIndex(4)}># 인터런</li>
            </ul>
            {renderSwiper()}
        </div>
    );
};

export default SwiperComponent;
