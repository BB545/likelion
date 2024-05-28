import React from 'react'
import { useState } from 'react'

const Write = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const Print = () => {
        if (title === '' || content === '') {
            alert('내용을 채워주세요')
            return
        }

        console.log('title:', title)
        console.log('content:', content)
    }

  return (
    <div className='writeContainer'>
        <div className="itemContainer">
            <input type="text" className='title' placeholder='제목을 입력해주세요!' value={title} onChange={(e) => {setTitle(e.target.value)}} />
            <textarea name="content" id="content" placeholder='내용을 입력해주세요!' value={content} onChange={(e) => {setContent(e.target.value)}}></textarea>
            <div className='btns'>
                <button className='cancel'>취소하기</button>
                <button className='write' onClick={() => Print()}>작성하기</button>
            </div>
        </div>
    </div>
  )
}

export default Write