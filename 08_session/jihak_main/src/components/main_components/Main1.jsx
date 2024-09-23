import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Main1 = () => {
    const [activeIndex, setActiveIndex] = useState(1);
    const [activeRightIndex, setActiveRightIndex] = useState(1);

    const slidesData = [
        { id: "img1", text1: "선생님! 아직 티솔루션 회원이 아니신가요?", text2: "신규 회원가입 이벤트 🎁", content: <span className="left_slide_swiper_img1"></span> },
        { id: "img2", text1: "마음에 드는 표지 선택하고 상품 받아가세요!", text2: "빈칸 퀴즈 이벤트 💡", content: <span className="left_slide_swiper_img2"></span> },
        { id: "img3", text1: "여기에 들어가는 초성은 무엇일까요?", text2: "표지 좋아요 이벤트 💗", content: <span className="left_slide_swiper_img3"></span> },
        { id: "img4", text1: "2022 개정 지학사 교과서를 응원해 주세요!", text2: "응원 이벤트 🍀", content: <span className="left_slide_swiper_img4"></span> },
    ];

    const slidesRightData = [
        { id: "img5", content: <span className="right_slide_swiper_img1"></span>, back: <div className='right_slide_swiper_back_img1'></div> },
        { id: "img6", content: <span className="right_slide_swiper_img2"></span>, back: <div className='right_slide_swiper_back_img2'></div> },
        { id: "img7", content: <span className="right_slide_swiper_img3"></span>, back: <div className='right_slide_swiper_back_img3'></div> },
        { id: "img8", content: <span className="right_slide_swiper_img4"></span>, back: <div className='right_slide_swiper_back_img4'></div> },
        { id: "img9", content: <span className="right_slide_swiper_img5"></span>, back: <div className='right_slide_swiper_back_img5'></div> },
        { id: "img10", content: <span className="right_slide_swiper_img6"></span>, back: <div className='right_slide_swiper_back_img6'></div> },
    ];

    const handleSlideChange = (swiper) => {
        const currentIndex = swiper.realIndex;
        setActiveIndex(currentIndex);

        const bullets = document.querySelectorAll('.custom-pagination .swiper-pagination-bullet');
        bullets.forEach((bullet, index) => {
            bullet.classList.remove('bullet-effect1', 'bullet-effect2', 'bullet-effect3', 'bullet-effect4');
            if (index === currentIndex) {
                if (currentIndex === 0) {
                    bullet.classList.add('bullet-effect1');
                } else if (currentIndex === 1) {
                    bullet.classList.add('bullet-effect2');
                } else if (currentIndex === 2) {
                    bullet.classList.add('bullet-effect3');
                } else if (currentIndex === 3) {
                    bullet.classList.add('bullet-effect4');
                }
            }
        });
    };

    const handleRightSlideChange = (swiper) => {
        const currentRightIndex = swiper.realIndex;
        setActiveRightIndex(currentRightIndex);
    };

    useEffect(() => {
        const initialBullets = document.querySelectorAll('.custom-pagination .swiper-pagination-bullet');
        initialBullets.forEach((bullet, index) => {
            bullet.classList.remove('bullet-effect1', 'bullet-effect2', 'bullet-effect3', 'bullet-effect4');
            if (index + 1 === activeIndex) {
                bullet.classList.add('bullet-effect1');
            }
        });
    }, []);

    return (
        <section className='main_container_1'>
            <div className="main_inner_container">
                <div className="inner_title_box">
                    <h2 className="inner_title_box_title">2022 개정 <br /> 교육과정 교과서</h2>
                    <p className="inner_title_box_sub">지학사 교과서가 수업에 필요한 모든 것을 지원합니다.</p>
                </div>
                <div className="inner_left_slide">
                    <div className="left_slide_top">
                        <h5>EVENT</h5>
                        <div className="custom-pagination"></div>
                    </div>
                    <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        navigation
                        pagination={{
                            clickable: true,
                            el: '.custom-pagination',
                        }}
                        loop={true}
                        slidesPerView={1}
                        autoplay={{
                            delay: 7000,
                            disableOnInteraction: false,
                        }}
                        onSlideChange={handleSlideChange}
                    >
                        {slidesData.map((slide, index) => (
                            <SwiperSlide key={slide.id} id={slide.id} className={activeIndex === index ? 'animate' : ''}>
                                <div className="left_slide_box">
                                    <p className="left_slide_box_txt">
                                        {slide.text1}
                                        <br />
                                        {slide.text2}
                                    </p>
                                    <div className="left_slide_box_img">
                                        {slide.content}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="inner_right_slide">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        loop={true}
                        slidesPerView={1}
                        autoplay={{
                            delay: 7000,
                            disableOnInteraction: false,
                        }}
                        onSlideChange={handleRightSlideChange}
                    >
                        {slidesRightData.map((slide, index) => (
                            <SwiperSlide key={slide.id} id={slide.id} className={activeRightIndex === index ? 'animate' : ''}>
                                    <div className="right_slide_box_img">
                                        {slide.content}
                                        {slide.back}
                                    </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Main1;
