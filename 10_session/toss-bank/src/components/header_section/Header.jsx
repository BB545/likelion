import React from 'react';
import tossbank from '../../assets/images/logo/TossBank_Logo.svg'
import Nav from './Nav';

const Header = () => {
  return (
    <header id='header_container'>
        <img src={tossbank} alt="토스뱅크 로고" id='tossbank_logo' className='btn' />
        <Nav />
        <div id="header_start_btn" className='btn'>시작하기</div>
    </header>
  )
}

export default Header