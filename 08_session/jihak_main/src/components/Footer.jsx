import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease',
            once: false,
        });
    }, []);

    return (
        <footer className='footer_container'>
            <div className="foot_banner" data-aos="fade-up">
                <div className="banner_item_1">
                    <span className="banner_img_1"></span>
                    <h4 className="banner_title_1">
                        선생님 반가워요!
                        <br />
                        티솔루션과 첫 만남을 함께 하시겠어요?
                    </h4>
                    <div className="banner_sub_1">
                        <p className="banner_sub_1_txt">티솔루션 바로가기</p>
                        <span className="banner_sub_1_next"></span>
                    </div>
                </div>
                <div className="banner_item_2">
                    <span className="banner_img_2"></span>
                    <h4 className="banner_title_2">
                        지학사의 2022 개정 교육과정
                        <br />
                        새로운 교과서를 응원해!
                    </h4>
                    <div className="banner_sub_2">
                        <p className="banner_sub_2_txt">한줄평 이벤트 바로가기</p>
                        <span className="banner_sub_2_next"></span>
                    </div>
                </div>
            </div>
            <div className="foot_info">
                <div className="info_inner">
                    <span className="foot_logo"></span>
                    <p className="foot_info_txt">
                        서울특별시 마포구 신촌로6길 5 (주)지학사 대표이사 : 권준구 사업등록번호 : 105-81-31452
                        <br />
                        통신판매업신고 : 제2020-서울마포-0362호 E-mail : WEBMASTER@JIHAK.CO.KR
                        <br />
                        대표번호 : 02-330-5200 교과서 구입문의 : 02-330-5303 독서평설 정기구독 문의 : 02-3142-2002
                        <br />
                        COPYRIGHT©2015 JIHAKSA PUBLISHING CO.LTD. ALL RIGHT RESERVED.
                        <br />
                        (주)지학사의 콘텐츠를 사전 허가 없이 학교수업 외의 목적으로 이용하는 경우(불법복제,전송,유통 등) 저작권법 제25조에 의해 법적 처벌을 받을 수 있습니다.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer