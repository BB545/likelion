import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Main3 = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease',
            once: false,
        });
    }, []);

    return (
        <section className='book_container2'>
            <div className="book_sec1" data-aos="fade-up">
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
                <div className="booK_sec1_txt text_right">
                    <span className='book_sec1_txt_badge right_badge'>초등 4학년 교과서</span>
                    <h2 className='book_sec1_txt_title'>
                        한 단계 더 성장하는
                        <br />
                        아이들과 선생님
                    </h2>
                    <p className="book_sec1_txt_sub">
                        수업의 과정은 즐겁고, 성취는 보람찬 2022 개정 교육과정 교과서.
                        <br />
                        내용의 깊이는 더하고 과정은 즐겁게 구성한
                        <br />
                        지학사 교과서와 함께 새로운 수업을 경험해 보세요.
                    </p>
                </div>
            </div>
            <ul className="book_sec2" data-aos="fade-up">
                <li className="book_sec2_list">
                    <span className="list_effect1"></span>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="	https://textbook.jihak.co.kr/img/mthunb-suhak41-pr.png" alt="수학 4-1" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="	https://textbook.jihak.co.kr/img/mthunb-suhak42-pr.png" alt="수학 4-2" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <span className="list_effect2"></span>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-sahui41-pr.png" alt="사회 4-1" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-sahui42-pr.png" alt="사회 4-2" className="list_item_img_1" />
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
                        <img src="https://textbook.jihak.co.kr/img/mthunb-gwahak41-pr.png" alt="과학 4-1" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-gwahak42-pr.png" alt="과학 4-2" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <span className="list_effect5"></span>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-eumak4-pr.png" alt="음악 4" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-misul4-pr.png" alt="미술 4" className="list_item_img_1" />
                        <span className="list_item_shadow"></span>
                        <span className="list_item_btn">자세히 보기</span>
                    </a>
                </li>
                <li className="book_sec2_list">
                    <span className="list_effect6"></span>
                </li>
                <li className="book_sec2_list">
                    <a href="" className="list_item">
                        <img src="https://textbook.jihak.co.kr/img/mthunb-cheyook4-pr.png
" alt="체육 4" className="list_item_img_1" />
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

export default Main3