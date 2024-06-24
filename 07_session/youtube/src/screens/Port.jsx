import React, { useEffect, useState } from 'react'
import Main from '../components/Main'

import VideoCards from '../components/videos/VideoCards'
import { portfolioText } from '../data/portfolio'

const Port = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const portPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "기아타이거즈"
            description="기아타이거즈입니다.">
            
            <section id='portPage' className={portPageClass}>
                <h2>🫣 나만의 기아타이거즈 유튜브.</h2>
                <div className="video__inner">
                    <VideoCards videos={portfolioText} />
                </div>
            </section>
        </Main>
    )
}

export default Port