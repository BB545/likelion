import React from 'react'

const MainButton = () => {

    const copyLink = () => {
        const url = window.location.href;
        navigator.clipboard.writeText(url).then(() => {
            alert('URL이 복사되었습니다!');
        }).catch(err => {
            console.error('복사 실패: ', err);
        });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='btn_container'>
            <a href="" className='click_btn copy_link_btn' onClick={copyLink}>
                <span className="copy_link"></span>
            </a>
            <a href="" className='click_btn up_btn' onClick={scrollToTop}>
                <span className="click_up"></span>
            </a>
        </div>
    )
}

export default MainButton