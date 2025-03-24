import React from "react";
//import { Link } from "react-router-dom";

const Emotion = () => {
    console.log("감정정 컴포넌트 렌더링");

    return(
        <div>
            <h1>그때 당시 어떤 감정을 느꼈나요?</h1>
            <button>기쁨</button>
            <button>슬픔</button>
            <button>화남</button>
            <button>즐거움</button>
            {/* 
            </div><Link to "/thumb">Go to thumbnail</Link>
            */}
        </div>
    );
}

export default Emotion;