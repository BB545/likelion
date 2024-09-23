import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Main2 = () => {
    useEffect(() => {
        AOS.init({
          duration: 500,
          easing: 'ease',
          once: true,
        });
      }, []);

    return (
        <section className='book_container'>
            <div className="book_sec1" data-aos="fade-up">
                <div className="booK_sec1_txt">
                    <span className='book_sec1_txt_badge'>초등 3학년 교과서</span>
                    <h2 className='book_sec1_txt_title'>
                        선생님과 학생을 생각하는
                        <br />
                        지학사 교과서
                    </h2>
                    <p className="book_sec1_txt_sub">
                        가르치는 선생님과, 배우는 학생의 마음을 모두 생각한 2022 개정 교육과정 교과서.
                        <br />
                        항상 학교 현장을 고민하는 지학사 교과서가
                        <br />
                        그동안의 경험을 모아 더 나은 수업을 도와드립니다.
                    </p>
                </div>
                <ul className="book_sec1_list">
                    <li className="book_sec1_list_item">
                        <span className="list_item_1"></span>
                        <p className="list_item_1_txt">수학</p>
                    </li>
                    <li className="book_sec1_list_item">
                        <span className="list_item_2"></span>
                        <p className="list_item_2_txt">사회</p>
                    </li>
                    <li className="book_sec1_list_item">
                        <span className="list_item_3"></span>
                        <p className="list_item_3_txt">과학</p>
                    </li>
                    <li className="book_sec1_list_item">
                        <span className="list_item_4"></span>
                        <p className="list_item_4_txt">음악</p>
                    </li>
                    <li className="book_sec1_list_item">
                        <span className="list_item_5"></span>
                        <p className="list_item_5_txt">미술</p>
                    </li>
                    <li className="book_sec1_list_item">
                        <span className="list_item_6"></span>
                        <p className="list_item_6_txt">체육</p>
                    </li>
                </ul>
            </div>
            <ul className="book_sec2" data-aos="fade-up">
                <li className="book_sec2_list">
                    <span className="list_effect1"></span>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-suhak31-pr.png" alt="수학 3-1" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="	https://textbook.jihak.co.kr/img/mthunb-suhak32-pr.png" alt="수학 3-2" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <span className="list_effect2"></span>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-sahui31-pr.png" alt="사회 3-1" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-sahui32-pr.png" alt="사회 3-2" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <span className="list_effect3"></span>
                </li>
                <li className="book_sec2_list">
                    <span className="list_effect4"></span>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-gwahak31-pr.png" alt="과학 3-1" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-gwahak32-pr.png" alt="과학 3-2" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <span className="list_effect5"></span>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-eumak3-pr.png" alt="음악 3" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-misul3-pr.png" alt="미술 3" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <span className="list_effect6"></span>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-cheyook3-pr.png
" alt="체육 3" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <span className="list_effect7"></span>
                </li>
            </ul>
        </section>
    )
}

export default Main2