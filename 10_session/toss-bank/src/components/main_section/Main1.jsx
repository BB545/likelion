import React, { useEffect, useRef } from 'react';

const Main1 = () => {
    const sectionRef = useRef(null);
    const videoRef = useRef(null);

    useEffect(() => {
        if (sectionRef.current) {
            sectionRef.current.style.transform = 'translate3d(0px, 100px, 0px)';
            sectionRef.current.style.opacity = '0';

            setTimeout(() => {
                if (sectionRef.current) {
                    sectionRef.current.style.transform = 'translate3d(0px, 0px, 0px)';
                    sectionRef.current.style.opacity = '1';
                }
            }, 1000)
        }

        if (videoRef.current) {
            videoRef.current.style.transform = 'translate3d(0px, 100px, 0px)';
            videoRef.current.style.opacity = '0';

            setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.style.transform = 'translate3d(0px, 0px, 0px)';
                    videoRef.current.style.opacity = '1';
                }
            }, 1000)
        }
    }, []);

    return (
        <div id='main_1_container'>
            <div id="main_1_inner_container">
                <section id="main_1_section_title" ref={sectionRef}>
                    <div id="title_area">
                        <p>토스뱅크 체크카드</p>
                        <h1>
                            다채로운 컬러
                            <br />
                            아낌없는 혜택
                        </h1>
                    </div>
                </section>
                <section id="main_1_section_video" ref={videoRef}>
                    <div id="section_video_box">
                        <div id="video_area">
                            <img src="https://common-fe.toss.im/resources/adaptive?light=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Fbankcard_hero_FFFFFF.mp4%26t%3D00%3A00%3A00.000&dark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Fbankcard_hero_FFFFFF.mp4%26t%3D00%3A00%3A00.000&lowlight=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Fbankcard_hero_FFFFFF.mp4%26t%3D00%3A00%3A00.000&lowdark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Fbankcard_hero_FFFFFF.mp4%26t%3D00%3A00%3A00.000" alt="토스카드 이미지" id="video_img" aria-hidden />
                            <video poster="https://common-fe.toss.im/resources/adaptive?light=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Fbankcard_hero_FFFFFF.mp4%26t%3D00%3A00%3A00.000&dark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Fbankcard_hero_FFFFFF.mp4%26t%3D00%3A00%3A00.000&lowlight=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Fbankcard_hero_FFFFFF.mp4%26t%3D00%3A00%3A00.000&lowdark=https%3A%2F%2Fcore-cdn-fe.toss.im%2Fvideo%2Fframe%2F%3Fsource%3Dhttps%3A%2F%2Fstatic.toss.im%2F3d%2Fbankcard_hero_FFFFFF.mp4%26t%3D00%3A00%3A00.000" id="video_mp4" autoPlay loop playsInline muted>
                                <source src={'https://static.toss.im/3d/bankcard_hero_FFFFFF.mp4'} type='video/mp4' />
                            </video>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Main1