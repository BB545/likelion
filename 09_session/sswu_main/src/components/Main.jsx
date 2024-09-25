import React from 'react';
import Slider from './Section/Slider';
import arraow from '../assets/img/icon/arrowright.svg';
import intro from '../assets/img/png/introduce.png';

const Main = () => {
    const noticeItems = [
        '[교양 교학팀] 2024 성신 All Write 교양도서 백일장 공모전...',
        '2024학년도 동계 단기연수 프로그램 설명회 개최 안내',
        '[연산지원팀] 2024학년도 동계 학부생 연구 참여 프로그램...',
        '[교양 교학팀] 2024-2 글로벌라운지 운영 안내',
        '2024학년도 2학기 제1차 성신 모의토익 접수 및 시행',
        '[대학혁신(2024)] 2024학년도 동계학기 글로벌 인턴십...',
        '2024학년도 2학기 수강철회 시행 안내'
    ];

    return (
        <div className='Main_wrap container'>
            <Slider />
            <table className='notice_table'>
                <tr className='row_title'>
                    <td className='title_txt'>공지사항</td>
                </tr>
                {noticeItems.map((item) => (
                    <tr className='row_content'>
                        {item}
                        <img src={arraow} alt='arrow' className="row_content_img" />
                    </tr>
                ))}
            </table>
            <img src={intro} alt="intro" className="main_banner" />
        </div>
    )
}

export default Main