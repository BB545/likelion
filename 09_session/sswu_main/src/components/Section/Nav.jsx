import React, { useState } from 'react';
import main from '../../assets/img/icon/home.svg';
import like from '../../assets/img/icon/like.svg';
import search from '../../assets/img/icon/search.svg';
import mypage from '../../assets/img/icon/mypage.svg';
import mainfull from '../../assets/img/icon/homefull.svg';
import likefull from '../../assets/img/icon/likefull.svg';
import searchfull from '../../assets/img/icon/searchfull.svg';
import mypagefull from '../../assets/img/icon/mypagefull.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [btnIndex, setBtnIndex] = useState(0);
    const navItems = [
        { id: '/main', icon: main, activeIcon: mainfull },
        { id: '/like', icon: like, activeIcon: likefull },
        { id: '/search', icon: search, activeIcon: searchfull },
        { id: '/mypage', icon: mypage, activeIcon: mypagefull },
    ];

    const clickBtn = (index) => {
        setBtnIndex(index);
    }

    return (
        <ul className='nav'>
            {navItems.map((item, index) => (
                <Link to={item.id}>
                    <li className="nav_item" onClick={() => clickBtn(index)}>
                        <img src={btnIndex === index ? item.activeIcon : item.icon} alt={item.id} className="nav_icon" />
                    </li>
                </Link>
            ))}
        </ul>
    )
}

export default Nav