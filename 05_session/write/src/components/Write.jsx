import React, { useState } from 'react'
import Article from './Article';
import { useNavigate } from 'react-router-dom';

const Write = () => {
    const [open, setOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const handleClick = () => {
        // 전페이지 이동
        navigate(-1)
        // navigate는 함수를 한번 거쳐서만 사용 가능
    }

    // title 변할 때마다 함수를 돌리겠다. - 오류남
    // useEffect(() => {
    //     console.log(title)
    // }, [title]);

    return (
        <>
        {/* open 값이 true면 article을 보여주고, false면 write_wrap을 보여줘라 */}
            {open ? (
                <Article title = {title} content = {content} />
            ) : (
                <div className='write_wrap'>
                    {/* onChange = 변화를 setTitle에 넣겠다 */}
                    <input value={title} onChange={(e) => {setTitle(e.target.value)}} className='title' type="text" placeholder='제목을 입력해주세요!' />
                    <textarea value={content} onChange={(e) => {setContent(e.target.value)}} className='content' placeholder='내용을 입력해주세요!' />
                    <div>
                        <button className='delete' onClick={() => {handleClick()}}>취소하기</button>
                        <button className='write' onClick={() => {setOpen(true)}}>작성하기</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Write