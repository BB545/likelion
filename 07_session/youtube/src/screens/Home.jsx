import React from 'react'
import Main from '../components/Main'
import Today from '../components/contents/Today'
import Developer from '../components/contents/Developer'
import VideoSlider from '../components/videos/VideoSlider'

import { webdText } from '../data/webd'
import { websiteText } from '../data/website'
import { gsapText } from '../data/gsap'
import { portfolioText } from '../data/portfolio'
import { youtubeText } from '../data/youtube'
import { developerText } from '../data/developer';
import { todayText } from '../data/today'

const Home = () => {
    return (
        <Main 
            title = "hyunh 유튜브"
            description="hyunh 유튜버 사이트에 오신 것을 환영합니다.">
            
            <Today videos={todayText} id="today"/>
            <Developer videos={developerText} title="😪 추천 유튜브를 소개합니다." id="developer" />
            <VideoSlider videos={webdText} title="😮 likelionsswu!" id="webd" />
            <VideoSlider videos={websiteText} title="😛 kiatigers" id="website" />
            <VideoSlider videos={gsapText} title="🤓 likelion2024!" id="gsap" />
            <VideoSlider videos={portfolioText} title="🤗 기아타이거즈 유튜브를 공유합니다." id="portfolio" />
            <VideoSlider videos={youtubeText} title="😱 지금 이 코딩을 영상으로" id="youtube" />
        </Main>
    )
}

export default Home