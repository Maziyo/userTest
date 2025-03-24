import React from "react";
//import { Link } from "react-router-dom";

const Memory = () => {
    console.log("Memory 컴포넌트 렌더링");

    return(
        <div className="memory">
            <h1 id="title">기억의 도서관</h1>
            <textarea id="input" placeholder="여러분의 기억을 입력해주세요!"/>
            <button id = "send-btn">SEND</button>
            {/* 
            </div><Link to "/thumb">Go to thumbnail</Link>
            */}
        </div>
    );
}

export default Memory;