import React, { useState } from 'react'

const Main8 = () => {
    const [isOpen, setIsOpen] = useState([false, false, false]);

    const toggleContent = (index) => {
        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    return (
        <div id='main_8_container'>
            <div id="main_8_inner_container">
                <div>
                    <div id="inner_qna">
                        <div className="inner_qna_box_1"></div>
                        <div className="inner_qna_box_2">
                            <div className="qna_list">
                                <div className="list_action">
                                    <div className="list_toggle" onClick={() => toggleContent(0)}>
                                        <span>상품 안내</span>
                                        <div className={`toggle_icon_box ${isOpen[0] ? 'open' : ''}`}>
                                            <span className="toggle_icon">
                                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m11.34 6.96c-.01 0-.02.01-.02.02l-2.95 2.95c-.11.11-.26.17-.42.17s-.31-.06-.42-.17l-2.95-2.95c-.23-.23-.24-.6-.02-.84.23-.23.6-.24.84-.02 0 .01.01.02.02.02l2.53 2.54 2.53-2.54c.23-.23.6-.24.84-.02.23.23.24.6.02.84z" fill="#b0b8c1" fill-rule="evenodd" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`list_toggle_content ${isOpen[0] ? 'open' : ''}`}>
                                        <div className="toggle_content_box">
                                            <span className='span_1_box'>
                                                <span className='span_1_bold'>발급 대상</span>
                                            </span>
                                            <ul className='ul_1_box'>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>토스뱅크 계좌를 갖고 있는 12세 이상 고객 (단, 주민등록증/외국인등록증 (영주증, 거소증 포함)을 소지하지 않은 17세 미만 미성년 고객의 경우, 토스뱅크 아이서비스를 가입한 법정대리인을 통해 발급 가능)</span>
                                                </li>
                                            </ul>
                                            <span className='span_1_box'>
                                                <span className='span_1'>연회비</span>
                                            </span>
                                            <ul className='ul_1_box'>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>없음</span>
                                                </li>
                                            </ul>
                                            <span className='span_1_box'>
                                                <span className='span_1'>발급수수료</span>
                                            </span>
                                            <ul className='ul_1_box'>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>2,000원 (별도 안내 전까지 프로모션으로 면제 혜택 지속 제공)</span>
                                                </li>
                                            </ul>
                                            <span className='span_1_box'>
                                                <span className='span_1'>상품안내서/체크카드 개인회원 약관 다운로드</span>
                                            </span>
                                            <ul className='ul_1_box'>
                                                <li className='ul_1_li'>
                                                    <button className='btn'>토스뱅크 체크카드 상품안내서</button>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <button className='btn'>체크카드 개인회원 약관</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="qna_list">
                                <div className="list_action">
                                    <div className="list_toggle" onClick={() => toggleContent(1)}>
                                        <span>온라인 결제 안내</span>
                                        <div className={`toggle_icon_box ${isOpen[1] ? 'open' : ''}`}>
                                            <span className="toggle_icon">
                                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m11.34 6.96c-.01 0-.02.01-.02.02l-2.95 2.95c-.11.11-.26.17-.42.17s-.31-.06-.42-.17l-2.95-2.95c-.23-.23-.24-.6-.02-.84.23-.23.6-.24.84-.02 0 .01.01.02.02.02l2.53 2.54 2.53-2.54c.23-.23.6-.24.84-.02.23.23.24.6.02.84z" fill="#b0b8c1" fill-rule="evenodd" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`list_toggle_content ${isOpen[1] ? 'open' : ''}`}>
                                        <div className="toggle_content_box">
                                            <span className='span_1_box'>
                                                <span className='span_1'>온라인 결제하는 법</span>
                                            </span>
                                            <span className='span_1_box'>
                                                <span className='span_1'>토스뱅크는 매입/정산 업무를 하나카드에 위탁하고 있으며, 온라인 결제는 아래 방법으로 가능해요.</span>
                                            </span>
                                            <ul className='ul_1_box'>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>온라인 결제 할 때는 “하나카드”를 선택해야 해요.</span>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>간편결제(토스페이, 삼성페이, 네이버페이, 카카오페이 등)에 토스뱅크 체크카드를 등록하고 선택 가능한 간편결제를 선택하여 결제할 수 있어요.</span>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>카드번호 및 CVC 번호 확인은 『토스앱&gt;토스뱅크&gt;내 체크카드로 쓴 금액&gt;카드번호 보기』 에서 본인인증 후 확인 가능해요.</span>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>카드번호와 CVC 정보가 실물 카드에 기재되어 있지 않은 경우, 모바일 앱 사용이 익숙하지 않거나 체크카드 결제 환경이 다른 해외 현지 이용이 많은 고객은 카드 이용에 불편이 있으니 유의해주세요.</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="qna_list">
                                <div className="list_action">
                                    <div className="list_toggle" onClick={() => toggleContent(2)}>
                                        <span>기타 안내</span>
                                        <div className={`toggle_icon_box ${isOpen[2] ? 'open' : ''}`}>
                                            <span className="toggle_icon">
                                                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="m11.34 6.96c-.01 0-.02.01-.02.02l-2.95 2.95c-.11.11-.26.17-.42.17s-.31-.06-.42-.17l-2.95-2.95c-.23-.23-.24-.6-.02-.84.23-.23.6-.24.84-.02 0 .01.01.02.02.02l2.53 2.54 2.53-2.54c.23-.23.6-.24.84-.02.23.23.24.6.02.84z" fill="#b0b8c1" fill-rule="evenodd" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`list_toggle_content ${isOpen[2] ? 'open' : ''}`}>
                                        <div className="toggle_content_box">
                                            <span className='span_1_box'>
                                                <span className='span_1'>교통카드 이용 안내</span>
                                            </span>
                                            <ul className='ul_1_box'>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>후불교통 이용금액은 전월 1일부터 말일까지 이용한 누적금액이  매월 10일(공휴일인 경우 익영업일) 체크카드 결제 계좌에서 자동 출금돼요. 정상 출금되지 않은 경우 교통카드 기능은 쓸 수 없으며, 카드 재발급과 갱신발급이 불가능해요.</span>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>교통카드 이용대금 연체 시 연체료가 부과돼요. (연체이율 연 9% 적용)</span>
                                                </li>
                                            </ul>
                                            <span className='span_1_box'>
                                                <span className='span_1'>해외 이용 안내</span>
                                            </span>
                                            <ul className='ul_1_box'>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span_bold'>토스뱅크 통장(원화통장)만 소지하신 경우</span>
                                                    <span className='ul_1_span'>, 미화(USD)기준 거래금액에 국제브랜드 수수료(1%)와 해외서비스 수수료(해외가맹점 건당 US$0.5 및 해외ATM출금 건당 US$3)를 포함하여 카드 승인시점(무승인 매입건은 매입시점) 기준 토스뱅크의 전신환매도율을 적용한 후 원화로 출금돼요. </span>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span_bold'>토스뱅크 외화통장을 함께 소지하신 경우</span>
                                                    <span className='ul_1_span'>, 외화통장이 해외결제계좌로 자동 지정되어 아래와 같은 방법으로 출금돼요. 토스뱅크 외화통장 해지시 해외결제계좌는 토스뱅크(원화)통장으로 자동 변경돼요.</span>
                                                    <ul className='ul_2_box'>
                                                        <li className='ul_2_li'>
                                                            <span className='ul_2_span_bold'>토스뱅크 외화통장 17개 지원통화</span>
                                                            <span className='ul_2_span'>: 해외결제대금이 국제브랜드 수수료(1%)*와 해외서비스 수수료**를 포함하여 현지통화로 출금돼요. <br />
                                                                - 17개 지원통화: 미국달러(USD), 유럽유로(EUR), 일본엔화(JPY), 영국파운드(GBP), 캐나다달러(CAD), 호주달러(AUD), 뉴질랜드달러(NZD), 싱가폴달러(SGD), 홍콩달러(HKD), 중국위안화(CNY), 스위스프랑(CHF), 말레이시아링깃(MYR), 필리핀페소(PHP), 인도네시아루피아(IDR), 태국바트(THB), 베트남동(VND), 타이완달러(TWD)</span>
                                                        </li>
                                                        <li className='ul_2_li'>
                                                            <span className='ul_2_span_bold'>토스뱅크 외화통장 미지원 통화</span>
                                                            <span className='ul_2_span'>: 해외결제대금이 국제브랜드 수수료(1%)*와 해외서비스 수수료** 를 포함하여 미국달러(USD)로 출금돼요.
                                                                <br /><br />
                                                                * 국제브랜드수수료: (미국달러(USD)기준 거래금액 X 1%) / 카드 승인시점(무승인 매입건은 매입시점) 기준 토스뱅크의 미화환산율 <br />
                                                                **해외서비스수수료 <br />
                                                                - 해외가맹점: 건당 US$0.5/ 카드 승인시점(무승인 매입건은 매입시점) 기준 토스뱅크의 미화환산율 <br />
                                                                - 해외현금인출: 건당 US$3/ 카드 승인시점(무승인 매입건은 매입시점) 기준 토스뱅크의 미화환산율</span>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>토스뱅크 외화통장 미지원 통화의 해외가맹점 및 해외ATM출금 수수료는 미국달러(USD)로 출금돼요.</span>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>해외가맹점 이용금액 중 연체금액 및 해외 원화결제서비스 이용금액은 원화 결제계좌(토스뱅크 통장)에서 원화로 출금돼요. </span>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>해외에서 결제하거나 현금을 찾을 때 비밀번호 6자리를 입력하라고 안내받으면 “카드 비밀번호 4자리+00”으로 입력하시면 돼요. </span>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>해외ATM출금 시, 별도 현지 ATM 수수료 및 조회 수수료가 부과될 수 있어요. </span>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>국제브랜드 수수료는 국제브랜드사 정책에 따라 변경될 수 있으며, 변경되는 경우 사전 고지하여 드려요.</span>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>해외에서 원화로 결제하면 추가 수수료가 부과될 수 있어요. 해외에서는 ‘현지통화’로 결제하시기를 권장해 드려요.</span>
                                                </li>
                                            </ul>
                                            <span className='span_1_box'>
                                                <span className='span_1_bold'>부족한돈 자동환전 서비스</span>
                                            </span>
                                            <ul className='ul_1_box'>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>외화통장(외화결제계좌)의 잔액부족으로 카드 해외이용대금(해외가맹점 및 해외현금인출)의 전부 또는 일부를 결제할 수 없을 경우, 부족한 금액을 연결된 토스뱅크 통장(원화결제계좌)에서 인출하여 자동환전 후 결제하도록 지원하는 서비스예요.</span>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>이 서비스로 자동환전되는 통화 및 적용환율은 아래와 같아요.</span>
                                                </li>
                                            </ul>
                                            <div className='div_table_box'>
                                                <table className='div_table'>
                                                    <tbody className='table_tbody'>
                                                        <tr className='table_tr'>
                                                            <td className='table_td'>
                                                                <span className='table_span_bold'>외화통장 17개 지원통화</span>
                                                            </td>
                                                            <td className='table_td'>
                                                                <span className='table_span'>카드 승인시점 (무승인매입의 경우 매입시점)의
                                                                    각 통화별 토스뱅크 전신환매도율 (환율우대100% 적용으로 매매기준율과 동일효과)이 적용되어 해당 해외결제 통화로 자동환전</span>
                                                            </td>
                                                        </tr>
                                                        <tr className='table_tr'>
                                                            <td className='table_td'>
                                                                <span className='table_span_bold'>그 외(미지원) 통화</span>
                                                            </td>
                                                            <td className='table_td'>
                                                                <span className='table_span'>카드 승인시점 (무승인매입의 경우 매입시점)의
                                                                    미국달러(USD) 토스뱅크 전신환매도율 (환율우대100% 적용으로 매매기준율과 동일효과)이 적용되어 미국달러(USD)로 자동환전</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <ul className='ul_1_box'>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'>본 서비스의 이용 및 중지는 『토스앱 &gt; 토스뱅크 &gt; 내 체크카드로 쓴 금액&gt; 카드 관리 &gt; 부족한돈 자동환전』에서 설정하실 수 있어요 </span>
                                                </li>
                                                <li className='ul_1_li'>
                                                    <span className='ul_1_span'> 토스뱅크 통장(원화결제계좌)의 잔액이 부족한 경우 이 서비스의 제공이 불가해요. 다만, '카드잔액 자동충전 서비스 가입' 고객은 원화결제계좌의 잔액이 부족하더라도, 고객이 사전에 지정한 타행 계좌에서 원화결제계좌로 돈이 이체(자동충전)되어 이 서비스를 제공받을 수 있어요. 카드잔액 자동충전 서비스에 관한 구체적인 내용은 '카드 결제 부족금액 자동 채우기 (카드잔액 자동충전) 서비스 이용약관' 및 이에 관한 안내를 확인해주세요.</span>
                                                </li>
                                            </ul>
                                            <span className='span_1_box'>
                                                <span className='span_1'>기타 유의사항</span>
                                            </span>
                                            <span className='span_1_box'>
                                                <span className='span_1'>카드를 발급 받기 전 상세혜택 및 이용조건은 상품안내서, 약관 등을 통해 확인해주세요.</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <span className="qna_blank"></span>
                        </div>
                        <div className="inner_qna_box_3"></div>
                    </div>
                    <section id="inner_etc">
                        <span>준법감시인 심의필 제242114호 (2024.10.04. ~ 2025.10.03.) </span>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Main8