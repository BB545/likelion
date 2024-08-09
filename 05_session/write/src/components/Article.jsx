import React, { useState } from 'react'
import Comment from '../assets/img/comment.svg'
import Heart from '../assets/img/heart.svg'
import HeartFull from '../assets/img/heartfull.svg'

const Article = ({ title, content }) => {
    const [click, setClick] = useState(false);
    const [commentTxt, setCommentTxt] = useState('');
    const [comment, setComment] = useState([]);

    const handleComments = () => {
        if (commentTxt.length > 0) {
            setComment((prev) => [...prev, commentTxt]);
            setCommentTxt('');
        }
    }

    return (
        <div className='article_wrap'>
            <div className="article">
                <h2>{ title }</h2>
                <p>{ content }</p>

                <div>
                    <div>
                        <img src={Comment} alt="" />
                        <p>{comment.length}</p>
                    </div>
                    {click ? (
                        <div>
                            <img src={HeartFull} alt="" onClick={() => {setClick(!click)}} />
                            <p>1</p>
                        </div>
                    ) : (
                        <div>
                            <img src={Heart} alt="" onClick={() => {setClick(!click)}} />
                            <p>0</p>
                        </div>
                    )}
                </div>
            </div>
            <div className="comment">
                <input type="text" placeholder='댓글을 입력해주세요!' value={commentTxt} onChange={(e) => setCommentTxt(e.target.value)} />
                <button onClick={handleComments}>등록</button>
            </div>
            {comment.length > 0 ? comment.map((com) => (
                <div className='commentBox'>
                    {com}
                </div>
            )) : (
                <div style={{textAlign: "center"}}>작성된 댓글이 없습니다.</div>
            ) }
        </div>
    )
}

export default Article