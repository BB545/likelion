import React, { useState } from 'react'

const WideCardMain5 = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    return (
        <div id='wide_card_main_5_container'>
            <div id="wide_5_inner_container">
                <div id='blank_15'></div>
                <div id='wide_5_inner_toggle_area'>
                    <div id='wide_5_inner_toggle_box'>
                        <div id="wide_5_inner_toggle">
                            <div className="wide_5_list_toggle" onClick={() => setIsToggleOpen(!isToggleOpen)}>
                                <span>서비스 제공 조건</span>
                                <div className={`wide_5_toggle_icon_box ${isToggleOpen ? 'open' : ''}`}>
                                    <span className="wide_5_toggle_icon">
                                        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                                            <path d="m11.34 6.96c-.01 0-.02.01-.02.02l-2.95 2.95c-.11.11-.26.17-.42.17s-.31-.06-.42-.17l-2.95-2.95c-.23-.23-.24-.6-.02-.84.23-.23.6-.24.84-.02 0 .01.01.02.02.02l2.53 2.54 2.53-2.54c.23-.23.6-.24.84-.02.23.23.24.6.02.84z" fill="#b0b8c1" fill-rule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div className={`wide_5_list_toggle_content ${isToggleOpen ? 'open' : ''}`}>
                                <div className="wide_5_toggle_content_box">
                                    <span className='wide_5_toggle_span'>
                                        <span>실적 산정 기준</span>
                                    </span>
                                    <ul className='wide_5_toggle_ul'>
                                        <li>
                                            <span>지난달 1일부터 말일(승인 시점 기준)까지 국내외 일시불/할부 이용금액 </span>
                                        </li>
                                        <li>
                                            <span>40만원 미만과 40만원 이상 시 서비스 차등 제공</span>
                                        </li>
                                        <li>
                                            <span>최초 카드 사용등록일로부터 사용등록월 말일까지는 카드 실적 40만원 미만 기준으로 제공되며, 사용등록 다음 달부터는 지난달 실적 기준으로 서비스 제공</span>
                                        </li>
                                        <li>
                                            <span>할부 이용 전체 금액을 할부 이용한 달의 이용금액으로 반영</span>
                                        </li>
                                        <li>
                                            <span>후불교통요금 등 무승인거래(카드사의 승인 없이 이용금액이 카드사에 접수됨)의 경우, 매출이 접수된 월의 이용금액에 반영</span>
                                        </li>
                                        <li>
                                            <span>매출 취소 시 취소가 접수된 월에서 실적을 차감</span>
                                        </li>
                                    </ul>
                                    <span className='span_blank_1'></span>
                                    <span className='wide_5_toggle_span'>
                                        <span>할인 제외 대상</span>
                                    </span>
                                    <ul className='wide_5_toggle_ul'>
                                        <li>
                                            <span>할부 거래 할인 제외</span>
                                        </li>
                                        <li>
                                            <span>일시불 거래 중 국세, 지방세, 수도/전기요금, 그 외 공과금(우편요금, 여권 발급비용, 과태료, 범칙금, 벌금, 국가/공공기관/공공단체가 부과하는 부담금), 도시가스 요금, 아파트관리비, 국민연금/고용보험료/산재보험료/건강보험료 납부 금액, 스쿨뱅킹, 초・중・고 학교 납입금, 대학등록금, 대학원등록금, 상품권 및 기프트카드 구매, 선불카드 및 선불전자지급수단(하나머니 등) 충전 금액, 부동산임대료</span>
                                        </li>
                                    </ul>
                                    <span className='span_blank_1'></span>
                                    <span className='wide_5_toggle_span'>
                                        <span>실적 제외 대상</span>
                                    </span>
                                    <ul className='wide_5_toggle_ul'>
                                        <li>
                                            <span>국세, 지방세, 수도/전기요금, 그 외 공과금(우편요금, 여권 발급비용, 과태료, 범칙금, 벌금, 국가/공공기관/공공단체가 부과하는 부담금), 도시가스 요금, 아파트관리비, 국민연금/고용보험료/산재보험료/건강보험료 납부 금액, 스쿨뱅킹, 초･중･고 학교 납입금, 대학등록금, 대학원등록금, 상품권 및 기프트카드 구매, 선불카드 및 선불전자지급수단(하나머니 등) 충전 금액, 부동산임대료</span>
                                        </li>
                                    </ul>
                                    <span className='span_blank_1'></span>
                                    <span className='wide_5_toggle_span'>
                                        <span>서비스 제공 방법</span>
                                    </span>
                                    <ul className='wide_5_toggle_ul'>
                                        <li>
                                            <span>결제일에 청구할인 제공</span>
                                        </li>
                                        <li>
                                            <span>매출 접수된 국내외 일시불 이용금액에 따라 할인 혜택을 제공하며, 매출 취소 시 취소가 접수된 월에서 할인 금액을 차감</span>
                                        </li>
                                        <li>
                                            <span>모든 할인 서비스는 하나카드에 등록된 국내 가맹점 및 가맹점 업종 기준에 따라 제공</span>
                                        </li>
                                        <li>
                                            <span>할인 금액은 매출 건별 소수점 이하 금액 절사</span>
                                        </li>
                                        <li>
                                            <span>대중교통요금은 이번 달 1일부터 말일까지의 이용금액에 대하여 다음 달 할인 제공</span>
                                        </li>
                                        <li>
                                            <span>해외 매출은 이번 달 1일부터 말일까지 접수된 최종 원화 청구금액에 대하여 다음 달 할인 제공</span>
                                        </li>
                                        <li>
                                            <span>「토스뱅크 하나카드 Wide」 결제계좌는 토스뱅크에 한하여 지정 가능</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='wide_5_inner_logo'>
                        <img src="https://static.toss.im/ipd-tcs/toss_core/live/09764fd7-4014-4834-8327-42543ac96fca/Untitled.png" alt="" draggable="false" />
                    </div>
                    <span id='blank_17'></span>
                </div>
                <div id='blank_16'></div>
            </div>
        </div>
    )
}

export default WideCardMain5