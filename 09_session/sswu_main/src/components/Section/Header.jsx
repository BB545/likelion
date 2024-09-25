import React from 'react';
import logo_wihte from '../../assets/img/icon/Logowhite.svg';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo_wihte} alt="로고" className='header_logo' />
        </div>
    )
}

export default Header