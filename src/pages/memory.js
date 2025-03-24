import React, {useState} from "react";
//import { Link } from "react-router-dom";

const Memory = () => {
    console.log("Memory 컴포넌트 렌더링");

    const [text, setText] = useState("");

    const handlerSend = async () =>{
        if(!text.trim()) return;

        const response = await fetch("https://your-project-name.vercel.app/api/saveData", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ text })
        });

        if(response.ok){
            console.log("데이터 저장 성공!");
            setText("");
        }else{
            console.error("데이터 저장 실패");
        }
    }

    return(
        <div className="memory">
            <h1 id="title">기억의 도서관</h1>
            <textarea 
                id="input" 
                placeholder="여러분의 기억을 입력해주세요!"
                value={text}
                onChange={(e) => setText(e.target.value)}/>
            <button id = "send-btn" onClick={handlerSend}>SEND</button>
            {/* 
            </div><Link to "/thumb">Go to thumbnail</Link>
            */}
        </div>
    );
}

export default Memory;
