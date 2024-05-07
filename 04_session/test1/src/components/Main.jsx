import React, {useState} from 'react';
// useState 사용하면 화면에서 변경되는 유동적인 데이터 확인 가능

const Main = (props) => {
    const [myName, setName] = useState("Jhon");
    function ChangeName(){
        setName(myName === "Jhon" ? "Sean" : "Jhon")
    }
    return (
        <div>
            {/* html태그는 div안에 html태그를 한번 더 써줘야 변경없이 적용이 된다. */}
            <h1>안녕하세요. {myName}입니다.</h1>
            <button onClick={ChangeName}>Change</button>
        </div>
    );
}

export default Main;