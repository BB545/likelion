import React from 'react'
import { portfolioText } from '../../data/portfolio'
import { Link } from 'react-router-dom'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h2>🤗 기아타이거즈 유튜브를 공유합니다.</h2>
            <div className='video__inner'>
                {portfolioText.map((video, key) => (
                    <div className="video" key={key}>
                        <div className="video__thumb play__icon">
                            <Link to={`/video/${video.videoId}`}>
                                <img src={video.img} alt={video.title} />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Portfolio