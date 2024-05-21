import React, { useState } from 'react'
import axios from 'axios'

const Test = () => {
    const [change, setChange] = useState('보내기 전');

    const Changebutton = () => {
        axios.get('https://httpbin.org/get')
        .then((response) => {
            if(response.status === 200){
                setChange('연결이 성공하였습니다.')
            }
        })
        .catch((error) => {
            console.log(error)
            setChange('연결이 실패하였습니다.')
        })
    }

    return (
        <div className='btn_box'>
            <p>{change}</p>
            <button onClick={() => {Changebutton()}}>Axios</button>
        </div>
    )
}

export default Test