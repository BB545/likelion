import React, { useEffect, useState } from 'react'
import Main from '../components/Main'

import VideoCards from '../components/videos/VideoCards'
import { websiteText } from '../data/website'

const Website = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const websitePageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "kiatigers"
            description="kiatigers">
            
            <section id='websitePage' className={websitePageClass}>
                <h2>😄 kiatigers</h2>
                <div className="video__inner">
                    <VideoCards videos={websiteText} />
                </div>
            </section>
        </Main>
    )
}

export default Website