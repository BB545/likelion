import React, { useEffect } from 'react'
import MainCardCanvas from './MainCardCanvas';

const Main3 = () => {
    useEffect(() => {
        const elements = document.querySelectorAll('.bottom_color_change');
        let index = 0;

        elements.forEach((element, idx) => {
            element.classList.remove('show', 'hide');
            if (idx === 0) {
                element.classList.add('show');
            } else {
                element.classList.add('hide');
            }
        });

        const interval = setInterval(() => {
            elements[index].classList.remove('show');
            elements[index].classList.add('hide');

            index++;

            if (index >= elements.length) {
                index = 0;
            }

            elements[index].classList.remove('hide');
            elements[index].classList.add('show');
        }, 2000)

        return () => {
            clearInterval(interval);
            elements.forEach((element) => {
                element.classList.remove('show', 'hide');
            });
        };
    }, []);

    return (
        <div id='main_3_container'>
            <div id="main_3_inner_container">
                <section id="main_3_inner_section">
                    <div id="inner_title">
                        <h2 id="title_main">
                            <span id="title_main_top">앞뒤 다른 여덟가지</span>
                            <div id="title_main_bottom">
                                <span id="bottom_black">완전히 새로운</span>
                                <div id="color_change_box">
                                    <div className="bottom_color_change">
                                        <span className="color_change c_1">오렌지</span>
                                        <span className="color_change c_2">밀크</span>
                                    </div>
                                    <div className="bottom_color_change">
                                        <span className="color_change c_3">퍼플</span>
                                        <span className="color_change c_4">그린</span>
                                    </div>
                                    <div className="bottom_color_change">
                                        <span className="color_change c_5">레몬</span>
                                        <span className="color_change c_6">블루</span>
                                    </div>
                                    <div className="bottom_color_change">
                                        <span className="color_change c_7">나이트</span>
                                        <span className="color_change c_8">핑크</span>
                                    </div>
                                    <div className="bottom_color_change">
                                        <span className="color_change c_9">화이트</span>
                                        <span className="color_change c_10">블랙</span>
                                    </div>
                                </div>
                            </div>
                        </h2>
                        <p id="title_sub">카드를 잡고 돌리면 다채로운 색을 경험해 볼 수 있어요.</p>
                    </div>
                    <div id="inner_items">
                        <div id="inner_items_box">
                            <div id="items_video_area">
                                <div id="items_video_box">
                                    <img src="https://common-fe.toss.im/resources/adaptive?light=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2FCard_m_FFFFF-02.mp4%26t%3D00%3A00%3A00.000&dark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2FCard_m_FFFFF-02.mp4%26t%3D00%3A00%3A00.000&lowlight=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2FCard_m_FFFFF-02.mp4%26t%3D00%3A00%3A00.000&lowdark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2FCard_m_FFFFF-02.mp4%26t%3D00%3A00%3A00.000" alt="토스카드 이미지" id="video_img_2" aria-hidden />
                                    <video poster="https://common-fe.toss.im/resources/adaptive?light=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2FCard_m_FFFFF-02.mp4%26t%3D00%3A00%3A00.000&dark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2FCard_m_FFFFF-02.mp4%26t%3D00%3A00%3A00.000&lowlight=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2FCard_m_FFFFF-02.mp4%26t%3D00%3A00%3A00.000&lowdark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2FCard_m_FFFFF-02.mp4%26t%3D00%3A00%3A00.000" id="video_mp4_2" autoPlay loop playsInline muted>
                                        <source src={'https://static.toss.im/3d/Card_m_FFFFF-02.mp4'} type='video/mp4' />
                                    </video>
                                </div>
                            </div>
                            <div id="items_cards_area">
                                <MainCardCanvas />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Main3