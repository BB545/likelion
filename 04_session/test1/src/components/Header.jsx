import React from 'react';

function Header(props) {
    return (
        <div>
            {/* html태그는 div안에 html태그를 한번 더 써줘야 변경없이 적용이 된다. */}
            <header>
                <h1>헤더입니다.</h1>
            </header>
        </div>
    );
}

export default Header;