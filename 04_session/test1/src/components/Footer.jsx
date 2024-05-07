import React from 'react';

function Footer(props) {
    return (
        <div>
            {/* html태그는 div안에 html태그를 한번 더 써줘야 변경없이 적용이 된다. */}
            <footer>
                <h1>푸터입니다.</h1>
            </footer>
        </div>
    );
}

export default Footer;