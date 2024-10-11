import React, { useEffect, useRef, useState } from 'react';
import tossbank from '../../assets/images/logo/TossBank_Logo.svg'
import NavToggle from './NavToggle';

const Header = () => {
  const [navListIndex, setNavListIndex] = useState(-1);
  const headerContainerRef = useRef(null);
  const headerBackdropRef = useRef(null);

  const navLists = ['은행소개', '통장', '예금·적금', '대출', '외환', '카드', '고객센터', '채용', '기업뱅킹'];

  const handleMouseEnter = (index) => {
    setNavListIndex(index);

    if(headerBackdropRef.current) {
      headerBackdropRef.current.style.maxHeight = '100vh';
      headerBackdropRef.current.style.opacity = '1';
    }

    if(headerContainerRef.current) {
      headerContainerRef.current.style.maxHeight = '100%';
      headerContainerRef.current.style.backgroundColor = '#fff';
    }
  };

  const handleMouseLeave = () => {
    setNavListIndex(-1);

    if(headerBackdropRef.current) {
      headerBackdropRef.current.style.maxHeight = '48px';
      headerBackdropRef.current.style.opacity = '0';
    }

    if(headerContainerRef.current) {
      headerContainerRef.current.style.maxHeight = '48px';
      headerContainerRef.current.style.backgroundColor = 'transparent';
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        headerContainerRef.current.style.backgroundColor = '#fff';
      } else {
        headerContainerRef.current.style.backgroundColor = 'transparent';
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [])

  return (
    <>
      <div id='header_backdrop' ref={headerBackdropRef}></div>
      <header id='header_container' onMouseLeave={handleMouseLeave} ref={headerContainerRef}>
        <div id="header_container_top">
          <img src={tossbank} alt="토스뱅크 로고" id='tossbank_logo' className='btn' />
          <nav id='nav_container'>
            <ul id='header_nav'>
              {navLists.map((item, index) => (
                <li className='header_nav_list btn' id={`${navListIndex === index ? 'header_nav_list_active' : ''}`} onMouseEnter={() => handleMouseEnter(index)}>{item}</li>
              ))}
            </ul>
          </nav>
          <div id="header_start_btn" className='btn'>시작하기</div>
        </div>
        <NavToggle navListIndex={navListIndex} />
      </header>
    </>
  )
}

export default Header