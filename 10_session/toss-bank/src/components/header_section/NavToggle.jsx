import React from 'react'
import { Link } from 'react-router-dom';

const NavToggle = ({ navListIndex }) => {
    const toggleLeftLists = [
        { title: '은행소개', descriptions: '은행을 바꾸는 은행, 토스뱅크' },
        { title: '통장', descriptions: '하루만 넣어도 이자가 쌓이는 토스뱅크. 통장 송금, ATM 입출금까지 모든 수수료 무료.' },
        { title: '예금·적금', descriptions: '돈을 보관하는 순간, 바로 이자 입금해주는 예금부터 급할 때 미리 뺄 수 있는 적금까지 간편하게 시작해요.' },
        { title: '대출', descriptions: '중도상환수수료 없이 쉽고 간편하게 빌려요.' },
        { title: '외환', descriptions: '평생 무료 환전 살 때도, 팔 때도 수수료 무료.' },
        { title: '카드', descriptions: '다채로운 컬러의 체크카드와 결제할 때마다 할인받는 제휴 신용카드를 만나보세요.' },
        { title: '고객센터', descriptions: '토스뱅크 고객센터에서 365일 24시간 상담이 가능해요.' },
        { title: '채용', descriptions: '대한민국 금융의 새로운 역사, 토스뱅크와 함께 만들어요.' },
        { title: '기업뱅킹' },
    ];

    const toggleMidLists = [
        [
            { title: '은행소개', subItems: ['공시정보', '재무정보', '공고', '사업공고', <Link to="/about/location">오시는 길</Link>] },
            { title: '주주사소개', subItems: ['주주사소개'] },
            { title: '윤리강령', subItems: ['윤리강령'] },
        ],
        [
            { title: '통장', subItems: ['토스뱅크 통장', '나눠모으기 통장', '서브 통장'] },
            { title: '모임', subItems: ['모임 통장', '도전 통장', '모임 금고'] },
            { title: '아이', subItems: ['아이 통장'] },
            { title: '법인', subItems: ['법인 통장'] }
        ],
        [
            { title: '예금', subItems: ['먼저 이자 받는 정기예금', '법인 정기예금'] },
            { title: '적금', subItems: ['키워봐요적금', '굴비적금', '자유적금', '아이적금'] },
        ],
        [
            { title: '대출', subItems: ['신용대출', '마이너스통장', '비상금 대출', '전월세보증금대출', '사장님대출', '사장님마이너스통장'] },
            { title: '갈아타기', subItems: ['신용대출 갈아타기', '전월세보증금대출 갈아타기', '사장님대환대출'] },
        ],
        [
            { title: '외환', subItems: ['외화 통장'] },
        ],
        [
            { title: '카드', subItems: ['체크카드', '모임카드'] },
            { title: '제휴 신용카드', subItems: ['하나카드 Wide'] },
        ],
        [
            { title: '이용안내', subItems: ['공지사항', '자주 묻는 질문', '이용시간 안내', '금리 안내', '수수료 안내', 'ATM 이용 안내'] },
            { title: '소비자보호', subItems: ['소비자보호체계', '소비자보호공시', '소비자보호 우수사례', '금융감독원 금융정보', '금융사기피해 예방 및 대응', '연체대출 고객 안내', '고객정보보호정책', '민원 접수'] },
            { title: '자료실', subItems: ['증명서 진위 확인', '약관', '서식', '상품설명서', '상품공시실'] },
            { title: '문의', subItems: ['사업 제휴', '불법도박 계좌 신고'] }
        ],
        [
            { title: '토스뱅크 채용', subItems: ['채용 중 공고', '토스뱅크 더 알아보기'] },
        ],
        [
            { title: '기업뱅킹', subItems: ['기업뱅킹'] },
        ],
    ];

    return (
        <div id="header_toggle" className={`${navListIndex !== (-1) ? 'toggle_active' : ''}`}>
            {toggleLeftLists.map((item, index) => (
                <div className={`header_toggle_left ${navListIndex === index ? 'toggle_left_active' : ''}`}>
                    <div className="left_under">
                        <h5>{item.title}</h5>
                        <span>{item.descriptions}</span>
                    </div>
                </div>
            ))}
            {toggleMidLists.map((list, index) => (
                <ul id="header_toggle_mid" className={`${navListIndex === index ? 'toggle_mid_active' : ''}`}>
                    <li className="header_toggle_mid_list">
                        <ul className="mid_list_under">
                            {list.map((item, subIndex) => (
                                <li className="mid_list_under_item">
                                    <span>{item.title}</span>
                                    {item.subItems.map((subItem, subItemIndex) => (
                                        <p>{subItem}</p>
                                    ))}
                                </li>
                            ))}
                        </ul>
                    </li>
                </ul>
            ))}
            <div id="header_toggle_right"></div>
        </div>
    )
}

export default NavToggle