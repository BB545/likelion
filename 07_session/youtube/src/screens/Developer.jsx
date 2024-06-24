import React, { useEffect, useState } from 'react'
import Main from '../components/Main'

import { developerText } from '../data/developer'
import { Link } from 'react-router-dom'

const Developer = () => {
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 300);
    }, []);

    const developerPageClass = loading ? 'isLoading' : 'isLoaded';

    return (
        <Main 
            title = "추천 유튜브"
            description="오늘의 추천 유튜브입니다.">
            
            <section id='developerPage' className={developerPageClass}>
                <h2>🥰 오늘의 추천 유튜브입니다.</h2>
                <div className="developer__inner">
                    {developerText.map((developer, key) => (
                        <div className="developer" key={key}>
                            <div className="developer__img play__icon">
                                <Link to={`/channel/${developer.channelId}`}>
                                    <img src={developer.img} alt={developer.name} />
                                </Link>
                            </div>
                            <div className="developer__info">
                                <Link to={`/channel/${developer.channelId}`}>
                                    {developer.name}
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </Main>
    )
}

export default Developer