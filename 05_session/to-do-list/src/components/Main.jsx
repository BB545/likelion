import React, { useState } from 'react'
import deleteIcon from '../assets/img/delete.svg'
import Header from './Header';

const Main = () => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, { id: items.length + 1, text: item }]);
    };

    const deleteItem = (id) => {
        setItems(items.filter((item) => item.id !== id));
    };

    return (
        <div>
            <Header onAdd={addItem} />
            <main id="main">
                <div className="list">
                    <div className="box">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                        <label htmlFor="checkbox"></label>
                        <p>코딩 공부하기</p>
                    </div>
                    <button id="deletebtn"><img src={deleteIcon} alt="delete button" /></button>
                </div>
                {items.map((item) => (
                    <div className="list" key={item.id}>
                        <div className="box">
                            <input type="checkbox" name="checkbox" id={`checkbox - ${item.id}`} />
                            <label htmlFor={`checkbox - ${item.id}`}></label>
                            <p>{item.text}</p>
                        </div>
                        <button id="deletebtn" onClick={() => deleteItem(item.id)}><img src={deleteIcon} alt="delete button" /></button>
                    </div>
                ))}
            </main>
        </div>
    )
}

export default Main