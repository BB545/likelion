import React from 'react';
import tossbank from '../../assets/images/logo/TossBank_Logo.svg'
import Nav from './Nav';
import NavToggle from './NavToggle';

const Header = () => {
  return (
    <header id='header_container'>
        <div id="header_container_top">
          <img src={tossbank} alt="토스뱅크 로고" id='tossbank_logo' className='btn' />
          <Nav />
          <div id="header_start_btn" className='btn'>시작하기</div>
        </div>
        <NavToggle />
    </header>
  )
}

export default Header