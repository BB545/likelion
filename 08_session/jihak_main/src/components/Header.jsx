import React from 'react'

const Header = () => {
  return (
    <div className='head_container'>
      <div className="head_logo"></div>
      <ul className="head_center_nav">
        <li className="head_center_li">초등 3학년 교과서</li>
        <li className="head_center_li">초등 4학년 교과서</li>
      </ul>
      <ul className="head_right_nav">
        <li className="head_right_li">티솔루션</li>
        <li className="head_right_li">
          <a className='head_right_li_item1'>이벤트
            <span className='head_right_li_item2'>EVENT</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Header