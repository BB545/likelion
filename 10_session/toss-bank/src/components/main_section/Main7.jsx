import React, { useEffect, useRef } from 'react'

const main7SlideItems = [
    'https://asset-fe.tossbank.com/card/scroll-1.png',
    'https://asset-fe.tossbank.com/card/scroll-2.png',
    'https://asset-fe.tossbank.com/card/scroll-3.png',
    'https://asset-fe.tossbank.com/card/scroll-4.png',
    'https://asset-fe.tossbank.com/card/scroll-5.png',
    'https://asset-fe.tossbank.com/card/scroll-6.png',
    'https://asset-fe.tossbank.com/card/scroll-7.png',
    'https://asset-fe.tossbank.com/card/scroll-8.png',
]

const Main7 = () => {
    const slideRef = useRef(null);
    const slide2Width = useRef(0);

    useEffect(() => {
        const slide = slideRef.current;
        
        if (!slide) return;
        
        slide2Width.current = slide.offsetWidth / 2;
        let start = 0;

        const slideAction = () => {
            start -= 1.5;
            if (Math.abs(start) >= slide2Width.current) {
                start = 0;
            }
            slide.style.transform = `translateX(${start}px)`;
            requestAnimationFrame(slideAction);
        };

        slideAction();

        return () => cancelAnimationFrame(slideAction);
    }, []);

    return (
        <div id='main_7_container'>
            <div id="main_7_inner_container">
                <section id="main_7_inner_section">
                    <div id="main_7_inner_title_box">
                        <h2>
                            쓸수록
                            <br />
                            기분 좋은 카드
                        </h2>
                        <p>토스앱을 설치하면 토스뱅크 체크카드를 만나볼 수 있어요</p>
                    </div>
                </section>
                <sction id="main_7_inner_section2">
                    <div id="inner_slide_area">
                        <div id="inner_slide_box">
                            <div id="inner_slide_action" ref={slideRef}>
                                <div className="slide_item">
                                    {main7SlideItems.map((item) => (
                                        <div className="slide_img_box">
                                            <div className="slide_img">
                                                <img src={item} alt={item} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="slide_item">
                                    {main7SlideItems.map((item) => (
                                        <div className="slide_img_box">
                                            <div className="slide_img">
                                                <img src={item} alt={item} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </sction>
            </div>
        </div>
    )
}

export default Main7