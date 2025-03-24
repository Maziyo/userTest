import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import React, {useEffect, useState} from 'react';
import { getUserID, getVisitCount, incrementVisitCount } from './utils/userID';

import Memory from './pages/memory';
import Emotion from './pages/emotion';

function App() {
  const navigate = useNavigate();  // useNavigate로 페이지 이동
  const [userID, setUserID] = useState("");

  useEffect(() => {
      //localStorage.clear(); 
      const id = getUserID();
      setUserID(id);

      const visitCount = getVisitCount();
      console.log(visitCount);

      if (visitCount === 0) {
          navigate('/memory');
      } 
      else {
          // 두 번째 방문이면 emotion 페이지로 이동
          navigate('/emotion');
      }

      //incrementVisitCount();  // 방문 횟수 증가
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path='/memory' element={<Memory />} />
        <Route path='/emotion' element={<Emotion />} />
      </Routes>
    </div>
  );
}

export default App;
