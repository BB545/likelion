import React, { useEffect, useRef } from 'react';
import 'swiper/css';

const MainCard = ({ index }) => {
    const handleNumberIcons = () => {
        switch (index) {
            case 1:
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                    >
                        <rect
                            fill="#818e9b"
                            height="33"
                            opacity="0.2"
                            rx="8"
                            width="33"
                            x="3.5"
                            y="3.5"
                        />
                        <path
                            d="m15.462 17.408v-3.816l5.065-3.169h3.073v18.146h-3.937v-13.754z"
                            fill="#3182f6"
                        />
                        <path
                            d="m0 0h40v40h-40z"
                            fill="none"
                        />
                    </svg>
                );
            case 2:
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                    >
                        <rect
                            fill="#818e9b"
                            height="33"
                            opacity="0.2"
                            rx="8"
                            width="33"
                            x="3.5"
                            y="3.5"
                        />
                        <path
                            d="m20.3 10.3c4.344 0 6.36 2.448 6.36 5.641 0 2.448-1.368 4.1-3.264 5.928l-3.649 3.481h6.985v3.216h-12.313v-2.373l5.981-5.929c1.9-1.872 2.3-2.784 2.3-4.056.179-1.282-.715-2.466-1.996-2.645-.142-.02-.285-.027-.428-.02-1.325.005-2.396 1.084-2.391 2.409 0 .085.005.171.015.256l-4.008-.024c.122-3.373 2.955-6.009 6.329-5.887.026 0 .053.002.079.003z"
                            fill="#3182f6"
                        />
                        <path
                            d="m0 0h40v40h-40z"
                            fill="none"
                        />
                    </svg>
                );
            case 3:
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                    >
                        <rect
                            fill="#818e9b"
                            height="33"
                            opacity="0.2"
                            rx="8"
                            width="33"
                            x="3.5"
                            y="3.5"
                        />
                        <path
                            d="m20.432 25.761c1.775 0 2.712-.961 2.735-2.328.024-1.561-.744-2.377-2.9-2.377h-1.9v-3.264h1.824c1.185.168 2.283-.657 2.451-1.842.016-.113.023-.227.021-.342.054-1.133-.82-2.095-1.952-2.149-.116-.006-.232-.001-.348.013-1.337-.087-2.503.899-2.64 2.232h-4.157c.241-3.144 3.168-5.5 6.793-5.5s6.341 1.996 6.341 4.996c.083 2.021-1.38 3.775-3.383 4.056 2.211.114 3.931 1.964 3.883 4.177 0 3.288-2.833 5.592-6.768 5.592-3.673 0-6.7-2.184-7.009-5.5h4.152c.265 1.352 1.481 2.304 2.857 2.236z"
                            fill="#3182f6"
                        />
                        <path
                            d="m0 0h40v40h-40z"
                            fill="none"
                        />
                    </svg>
                );
            case 4:
                return (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 40 40"
                    >
                        <rect
                            fill="#818e9b"
                            height="33"
                            opacity="0.2"
                            rx="8"
                            width="33"
                            x="3.5"
                            y="3.5"
                        />
                        <path
                            d="m20.2 10.423h4.872v11.785h2.228v2.977h-2.233v3.432h-3.839v-3.432h-8.545v-2.857zm1.033 11.785v-7.368l-4.609 7.368z"
                            fill="#3182f6"
                        />
                        <path
                            d="m0 0h40v40h-40z"
                            fill="none"
                        />
                    </svg>
                );
        }
    }

    const titles = [
        {
            title: '대중교통, 편의점 외 34곳에서',
            subtitle: '오프라인 캐시백',
            des1: '500원',
            subdes1: '1만원 이상',
            des2: '100원',
            subdes2: '1만원 미만',
        },
        {
            title: '페이, 쇼핑, 배달, 웹툰 등 28곳에서',
            subtitle: '온라인 캐시백',
            des1: '500원',
            subdes1: '1만원 이상',
        },
        {
            title: '고민없이 결제하고',
            subtitle: '어디서나 캐시백',
            des1: '0.4%',
            subdes1: '국내 모든 가맹점 결제 시',
        },
        {
            title: '캐시백 받는 대신 기부를',
            subtitle: '기부 캐시백',
            des1: '0.4% 기부하기',
            subdes1: '국내 모든 가맹점 결제 시',
        },
    ]

    const card1SlideItems = [
        'https://static.toss.im/png-icons/timeline/cu-fill.png',
        'https://static.toss.im/png-icons/timeline/gs25-fill.png',
        'https://static.toss.im/png-icons/timeline/kakaot-fill.png',
        'https://static.toss.im/png-icons/timeline/uber.png',
        'https://static.toss.im/png-icons/timeline/tada-fill.png',
        'https://static.toss.im/png-icons/timeline/bagdabang-fill.png',
        'https://static.toss.im/png-icons/timeline/starbucks-fill.png',
        'https://static.toss.im/png-icons/timeline/bluebottle-fill.png',
        'https://static.toss.im/png-icons/timeline/twosomeplace-fill.png',
        'https://static.toss.im/png-icons/timeline/baskinrobbins-fill.png',
        'https://static.toss.im/png-icons/timeline/dunkin-fill.png',
        'https://static.toss.im/png-icons/timeline/cgv-fill.png',
        'https://static.toss.im/png-icons/timeline/megabox-fill.png',
        'https://static.toss.im/png-icons/timeline/hollys-fill.png',
        'https://static.toss.im/png-icons/timeline/subway-fill.png',
        'https://static.toss.im/png-icons/timeline/mcdonald-fill.png',
        'https://static.toss.im/png-icons/timeline/burgerking-fill.png',
        'https://static.toss.im/png-icons/timeline/lotteria-fill.png',
        'https://static.toss.im/png-icons/timeline/momstouch-fill.png',
        'https://static.toss.im/png-icons/securities/icn-sec-fill-SHAK.png',
        'https://static.toss.im/png-icons/timeline/downtowner-fill.png',
        'https://static.toss.im/png-icons/timeline/knotted-fill.png',
        'https://static.toss.im/2d-emojis/png/4x/u1F68C.png',
        'https://static.toss.im/2d-emojis/png/4x/u1F688.png',
        'https://static.toss.im/2d-emojis/png/4x/u1F695.png'
    ]

    const card2SlideItems = [
        'https://static.toss.im/png-icons/timeline/naverpay-fill.png',
        'https://static.toss.im/png-icons/timeline/toss-fill.png',
        'https://static.toss.im/png-icons/timeline/coupang.png',
        'https://static.toss.im/png-icons/timeline/musinsa-fill.png',
        'https://static.toss.im/png-icons/timeline/kurly-fill.png',
        'https://static.toss.im/png-icons/timeline/ohouse-fill.png',
        'https://static.toss.im/png-icons/timeline/kream-fill.png',
        'https://static.toss.im/png-icons/timeline/ably-fill.png',
        'https://static.toss.im/png-icons/timeline/zigzagpink-fill.png',
        'https://static.toss.im/png-icons/timeline/logo_2.png',
        'https://static.toss.im/png-icons/timeline/coupang_eats.png',
        'https://static.toss.im/png-icons/timeline/yogiyo-fill.png',
        'https://static.toss.im/png-icons/timeline/riotgames-symbol-fill.png',
        'https://static.toss.im/png-icons/securities/icn-sec-fill-041140.png',
        'https://static.toss.im/png-icons/securities/icn-sec-fill-251270.png',
        'https://static.toss.im/png-icons/timeline/appstore-fill.png',
        'https://static.toss.im/png-icons/timeline/playstore.png',
        'https://static.toss.im/png-icons/timeline/naverwebtoon-fill.png',
        'https://static.toss.im/png-icons/timeline/naverseries-fill.png',
        'https://static.toss.im/png-icons/timeline/ridi_fill.png',
        'https://static.toss.im/png-icons/timeline/millie-fill.png',
        'https://static.toss.im/png-icons/securities/icn-sec-fill-NFLX.png',
        'https://static.toss.im/png-icons/timeline/disneyplus-fill.png',
        'https://static.toss.im/png-icons/timeline/wave-fill.png',
        'https://static.toss.im/png-icons/timeline/youtube-fill.png',
        'https://static.toss.im/png-icons/timeline/myrealtrip-fill.png',
        'https://static.toss.im/png-icons/timeline/yanolja-fill.png',
        'https://static.toss.im/png-icons/timeline/goodchoice-fill.png'
    ]

    const sliderRef = useRef(null);
    const slideWidth = useRef(0);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;
        
        slideWidth.current = slider.offsetWidth / card1SlideItems.length;
        let start = 0;

        const slide = () => {
            start -= 1.5;
            if (Math.abs(start) >= slideWidth.current * card1SlideItems.length) {
                start = 0;
            }
            slider.style.transform = `translateX(${start}px)`;
            requestAnimationFrame(slide);
        };

        slide();

        return () => cancelAnimationFrame(slide);
    }, []);

    return (
        <div className='card_container'>
            <span className="card_number">
                {handleNumberIcons()}
            </span>
            <div className="empty"></div>
            <h6 className="card_title_gray">
                {titles[index - 1].title}
            </h6>
            <br />
            <h6 className="card_title_blue">
                {titles[index - 1].subtitle}
            </h6>
            <div className="empty2"></div>
            <div className="card_benefit">
                <div className="benefit_item">
                    <h6 className="benefit_item_des">
                        {titles[index - 1].des1}
                    </h6>
                    <span className='benefit_item_subdes'>
                        {titles[index - 1].subdes1}
                    </span>
                </div>
                {titles[index - 1].des2 && titles[index - 1].subdes2 ?
                    <div className="benefit_item">
                        <h6 className="benefit_item_des">
                            {titles[index - 1].des2}
                        </h6>
                        <span className='benefit_item_subdes'>
                            {titles[index - 1].subdes2}
                        </span>
                    </div> : ''
                }
            </div>
            <div className="empty3"></div>
            {index === 1 || index === 2 ?
                <div className="card_swiper_area">
                    <div className='card_swiper_area_box' ref={sliderRef}>
                        {index === 1 ?
                            card1SlideItems.concat(card1SlideItems).map((item) => (
                                <div className='swiper_img_area'>
                                    <div className="swiper_img_box">
                                        <img src={item} alt={item} className="swiper_img" />
                                    </div>
                                </div>
                            ))
                            : ''
                        }
                        {index === 2 ?
                            card2SlideItems.concat(card2SlideItems).map((item) => (
                                <div className='swiper_img_area'>
                                    <div className="swiper_img_box">
                                        <img src={item} alt={item} className="swiper_img" />
                                    </div>
                                </div>
                            ))
                            : ''
                        }
                    </div>
                </div> : ''
            }
            {index === 3 ? <img src="https://static.toss.im/3d/uE116-red-toss-bank.png" alt="https://static.toss.im/3d/uE116-red-toss-bank.png" className="card_img_single" /> : ''}
            {index === 4 ? <img src="https://static.toss.im/3d-emojis/siback_face1.png" alt="https://static.toss.im/3d-emojis/siback_face1.png" className="card_img_single" /> : ''}
        </div>
    )
}

export default MainCard