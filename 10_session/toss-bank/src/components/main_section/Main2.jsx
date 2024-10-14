import React from 'react'
import MainCard from './MainCard'

const Main2 = () => {
    return (
        <div id='main_2_container'>
            <div id="main_2_inner_container">
                <section id="main_2_section_title">
                    <h3 id="title_black">나에게 맞게 언제든지</h3>
                    <div id="title_color_area">
                        <div id="title_color_box">
                            <div id="title_color">
                                <h3 id="title_color_line">
                                    <div className="color_word">
                                        <div className="color_char char1">혜</div>
                                        <div className="color_char char2">택</div>
                                        <div className="color_char char3">,&nbsp;</div>
                                    </div>
                                    <div className="color_word">
                                        <div className="color_char char4">내</div>
                                        <div className="color_char char5">가&nbsp;</div>
                                    </div>
                                    <div className="color_word">
                                        <div className="color_char char6">선</div>
                                        <div className="color_char char7">택</div>
                                        <div className="color_char char8">.</div>
                                    </div>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="empty"></div>
                    <span id="subtitle_gray">토스뱅크 체크카드 스위치 캐시백 시즌3</span>
                </section>
                <section id="main_2_section_cards">
                    <div className="card_area">
                        <MainCard index={1} />
                        <MainCard index={2} />
                    </div>
                    <div className="card_area">
                        <MainCard index={3} />
                        <MainCard index={4} />
                    </div>
                </section>
                <div className="empty4"></div>
                <div id="main_2_span">
                    <span id="main_2_span_text">24년 8월 1일부터 25년 2월 28일까지</span>
                </div>
                <div className="empty2"></div>
                <div id="main_2_button">
                    <div id="main_2_button_text" className='btn'>혜택 자세히보기</div>
                </div>
            </div>
        </div>
    )
}

export default Main2