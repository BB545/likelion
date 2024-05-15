import React, { useState } from 'react'
import plusIcon from '../assets/img/plus.svg'

const Header = ({ onAdd }) => {
    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        if (inputValue.trim() !== '') {
            onAdd(inputValue);
            setInputValue('');
        }
    };

    return (
        <div>
            <header id="header">
                <h1>TO-DO LIST</h1>
                <div className="add">
                    <input type="text" placeholder="오늘 할 일을 입력해주세요!" id="input_todo" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                    <button id="addbtn" onClick={addItem}><img src={plusIcon} alt="plus button" /></button>
                </div>
            </header>
        </div>
    )
}

export default Header