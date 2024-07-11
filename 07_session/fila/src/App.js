import React, { useState, useRef } from "react";
import './assets/scss/style.scss'

import event1 from './assets/img/event1.png'
import event2 from './assets/img/event2.png'
import ins1 from './assets/img/ins1.png'
import ins2 from './assets/img/ins2.png'
import ins3 from './assets/img/ins3.png'
import ins4 from './assets/img/ins4.png'
import ins5 from './assets/img/ins5.png'
import ins6 from './assets/img/ins6.png'
import ins7 from './assets/img/ins7.png'
import ins8 from './assets/img/ins8.png'
import ins9 from './assets/img/ins9.png'
import ins10 from './assets/img/ins10.png'

import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const swiperRef = useRef(null);

  const handleSlideChange = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="App">
      <Header />
      <Main />
      
      <div style={{ position: 'relative', top: '50px' }}>
        <h2 style={{ textAlign: 'center' }}>기획전</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <img src={event1} alt="event1" style={{ width: '800px', marginRight: '20px' }} />
            <h2 style={{ textAlign: 'center' }}>FILA CUSTOM STUDIO</h2>
            <p style={{ textAlign: 'center' }}>최상의 플레이를 위한 맞춤형 테니스화</p>
            <button style={{
              color: '#000', border: '1px solid #000', top: '30px', left: '300px', position: 'relative',
              zIndex: 10,
              backgroundColor: 'transparent',
              borderRadius: '30px',
              padding: '15px 50px',
              fontSize: '20px',
              cursor: 'pointer',
            }}>자세히 보기</button>
          </div>
          <div>
            <img src={event2} alt="event2" style={{ width: '800px' }} />
            <h2 style={{ textAlign: 'center' }}>Pertex LIfe</h2>
            <p style={{ textAlign: 'center' }}>휠라 퍼텍스 시리즈와 함께하는 퍼텍스 라이프</p>
            <button style={{
              color: '#000', border: '1px solid #000', top: '30px', left: '300px', position: 'relative',
              zIndex: 10,
              backgroundColor: 'transparent',
              borderRadius: '30px',
              padding: '15px 50px',
              fontSize: '20px',
              cursor: 'pointer',
            }}>자세히 보기</button>
          </div>
        </div>
      </div>
      <div style={{ position: 'relative', top: '300px', display: 'grid', justifyContent: 'center' }}>
        <div style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
          <CameraAltOutlinedIcon style={{width: '35px', height: '35px'}} />
          <span style={{fontWeight: 'bold', fontSize: '34px'}}>@fila_korea</span>
        </div>
        <div style={{display:'flex'}}>
            <img src={ins1} alt="ins1" style={{width: '330px', height: '330px'}} />
            <img src={ins2} alt="ins2" style={{width: '330px', height: '330px'}} />
            <img src={ins3} alt="ins3" style={{width: '330px', height: '330px'}} />
            <img src={ins4} alt="ins4" style={{width: '330px', height: '330px'}} />
            <img src={ins5} alt="ins5" style={{width: '330px', height: '330px'}} />
        </div>
        <div style={{display:'flex'}}>
            <img src={ins6} alt="ins6" style={{width: '330px', height: '330px'}} />
            <img src={ins7} alt="ins7" style={{width: '330px', height: '330px'}} />
            <img src={ins8} alt="ins8" style={{width: '330px', height: '330px'}} />
            <img src={ins9} alt="ins9" style={{width: '330px', height: '330px'}} />
            <img src={ins10} alt="ins10" style={{width: '330px', height: '330px'}} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
