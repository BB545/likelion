import React from 'react'
import logoBlack from '../assets/img/logoBlack.svg'

const Footer = () => {
  return (
    <>
        <footer style={{position: 'relative', top: '500px',  backgroundColor: '#ccc', padding: '20px'}}>
        <img src={logoBlack} alt="logoBlack" />
        <div style={{display: 'flex', justifyContent:'space-around'}}>
          <div>
            <h4>매장안내 | 공지사항 | FILA MEMBERSHIP | 단체 판매 | 대리점 개설 문의 | FILA 입찰 참여 안내</h4>
            <br />
            <p>서울특별시 성북구 보문로 35 휠라코리아(주)  대표이사: 김지헌</p>
            <p>사업자등록번호:716-81-01573 사업자정보확인 통신판매업신고:제 2020-서울강동-0160 호</p>
            <p>개인정보 관리책임자:이학우</p>
            <br />
            <p>본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.</p>
            <p>콘텐츠산업진흥법에 의한 콘텐츠보호안내 자세히보기</p>
            <h4>통합회원 이용약관 | 개인정보 처리방침 | 제보센터</h4>
          </div>
          <div>
            <div style={{marginTop: '60px'}}>
            <button style={{
              color: '#000', border: '1px solid #000',
              zIndex: 10,
              backgroundColor: 'transparent',
              borderRadius: '30px',
              padding: '10px 20px',
              fontSize: '15px',
              cursor: 'pointer',
            }}>CS CENTER</button>
            </div>
            <h1>1577-3472</h1>
            <h1>filaonline@fila.com</h1>
            <p>평일 월 ~ 금 : 09시 - 18시 (공휴일 제외)</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer