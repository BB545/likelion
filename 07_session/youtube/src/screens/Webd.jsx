import React, { useEffect, useState } from 'react'
import Main from '../components/Main'

import VideoCards from '../components/videos/VideoCards'
import { webdText } from '../data/webd'

const Webd = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const webdPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "likelionsswu"
            description="likelionsswu">

            <section id='webdPage' className={webdPageClass}>
                <h2>😄 likelionsswu!</h2>
                <div className="video__inner">
                    <VideoCards videos={webdText} />
                </div>
            </section>
        </Main>
    )
}

export default Webd