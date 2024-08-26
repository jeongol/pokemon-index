import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
        <img src=""></img>
        <div>
            <h1>포켓몬 도감</h1>
            <button onClick={() => navigate('/dex')}>
            포켓몬 도감 시작하기</button>
            <button onClick={() => navigate('/Testpages')}>
            관리자 테스트</button>
        </div>
    </div>
  );
}

export default Home;