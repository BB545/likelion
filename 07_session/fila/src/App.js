import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { AppBar, Toolbar, Typography, Menu, MenuItem } from "@mui/material";
import { styled } from '@mui/system';
import './assets/scss/style.scss'
import main1 from './assets/img/main1.png'
import main2 from './assets/img/main2.png'
import main3 from './assets/img/main3.png'
import main4 from './assets/img/main4.png'
import main5 from './assets/img/main5.png'
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

import logo from './assets/img/logo.svg'
import logoBlack from './assets/img/logoBlack.svg'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import SwiperComponent from "./swiper";

const images = [
  { src: main1, title: '24 NEW 인터런' },
  { src: main2, title: 'FILA ECHAPPE' },
  { src: main3, title: 'COLD WAVE T-SHIRTS' },
  { src: main4, title: 'FILA WHITE LINE' },
  { src: main5, title: 'PEITO' },
];

const CustomButton = styled('button')({
  position: 'absolute',
  bottom: '50px',
  left: '120px',
  zIndex: 10,
  backgroundColor: 'transparent',
  border: '1px solid #fff',
  color: 'white',
  borderRadius: '30px',
  padding: '15px 50px',
  fontSize: '20px',
  cursor: 'pointer',
});

function App() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const swiperRef = useRef(null);

  const handleSlideChange = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="App">
      <AppBar position="absolute" style={{ backgroundColor: 'transparent', zIndex: 100, padding: '0px', display: "flex", justifyContent: 'space-between' }} className="navbar">
        <Toolbar style={{ display: "flex", justifyContent: 'space-between' }}>
          <img src={logo} alt="로고" />
          <Typography
            variant="h6"
            onMouseEnter={handleMenuOpen}
            style={{ cursor: "pointer" }}
          >
            <ul onMouseLeave={handleMenuClose}>
              <li onMouseEnter={handleMenuOpen}>WOMEN</li>
              <li onMouseEnter={handleMenuOpen}>MEN</li>
              <li onMouseEnter={handleMenuOpen}>KIDS</li>
              <li onMouseEnter={handleMenuOpen}>TENNIS</li>
              <li onMouseEnter={handleMenuOpen}>BRAND</li>
            </ul>
          </Typography>
          <div>
            <MapOutlinedIcon />
            <SearchOutlinedIcon />
            <PersonOutlineOutlinedIcon />
            <AddShoppingCartOutlinedIcon />
          </div>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            MenuListProps={{ onMouseLeave: handleMenuClose }}
            className="submenu"
          >
            <div className="submenu-content" style={{ width: '300px', display: 'grid', justifyContent: 'center', borderRight: '0.5px solid rgb(0,0,0,0.6)' }}>
              <Typography variant="h6">New & Featured</Typography>
              <MenuItem onClick={handleMenuClose}>신상품</MenuItem>
              <MenuItem onClick={handleMenuClose}>베스트</MenuItem>
              <MenuItem onClick={handleMenuClose}>스타일</MenuItem>
              <MenuItem onClick={handleMenuClose}>세일</MenuItem>
              <br />
              <MenuItem onClick={handleMenuClose}>New Arrivals</MenuItem>
              <MenuItem onClick={handleMenuClose}>Best Sellers</MenuItem>
              <MenuItem onClick={handleMenuClose}>Trending</MenuItem>
              <MenuItem onClick={handleMenuClose}>Sale</MenuItem>
            </div>
            <div className="submenu-content" style={{ width: '300px', display: 'grid', justifyContent: 'center' }}>
              <Typography variant="h6">의류</Typography>
              <MenuItem onClick={handleMenuClose}>전체보기</MenuItem>
              <MenuItem onClick={handleMenuClose}>바람막이/집업</MenuItem>
              <MenuItem onClick={handleMenuClose}>티셔츠</MenuItem>
              <MenuItem onClick={handleMenuClose}>스커트/원피스</MenuItem>
              <MenuItem onClick={handleMenuClose}>롱팬츠</MenuItem>
              <MenuItem onClick={handleMenuClose}>숏팬츠</MenuItem>
              <MenuItem onClick={handleMenuClose}>브라탑/레깅스</MenuItem>
              <MenuItem onClick={handleMenuClose}>맨투맨/후드티</MenuItem>
              <MenuItem onClick={handleMenuClose}>테니스</MenuItem>
              <MenuItem onClick={handleMenuClose}>워터스포츠</MenuItem>
              <MenuItem onClick={handleMenuClose}>트레이닝 셋업</MenuItem>
            </div>
            <div className="submenu-content" style={{ width: '300px', display: 'grid', justifyContent: 'center' }}>
              <Typography variant="h6">신발</Typography>
              <MenuItem onClick={handleMenuClose}>전체보기</MenuItem>
              <MenuItem onClick={handleMenuClose}>라이프스타일</MenuItem>
              <MenuItem onClick={handleMenuClose}>헤리티지</MenuItem>
              <MenuItem onClick={handleMenuClose}>테니스</MenuItem>
              <MenuItem onClick={handleMenuClose}>러닝</MenuItem>
              <MenuItem onClick={handleMenuClose}>샌들/슬리퍼</MenuItem>
              <MenuItem onClick={handleMenuClose}>인터런</MenuItem>
              <MenuItem onClick={handleMenuClose}>레플리카</MenuItem>
              <MenuItem onClick={handleMenuClose}>에시페</MenuItem>
            </div>
            <div className="submenu-content" style={{ width: '300px', display: 'grid', justifyContent: 'center' }}>
              <Typography variant="h6">용품</Typography>
              <MenuItem onClick={handleMenuClose}>전체보기</MenuItem>
              <MenuItem onClick={handleMenuClose}>백팩</MenuItem>
              <MenuItem onClick={handleMenuClose}>숄더/토트백</MenuItem>
              <MenuItem onClick={handleMenuClose}>메신저/크로스백</MenuItem>
              <MenuItem onClick={handleMenuClose}>슬링백/힙색</MenuItem>
              <MenuItem onClick={handleMenuClose}>모자</MenuItem>
              <MenuItem onClick={handleMenuClose}>양말</MenuItem>
              <MenuItem onClick={handleMenuClose}>테니스</MenuItem>
              <MenuItem onClick={handleMenuClose}>기타</MenuItem>
            </div>
            <div className="submenu-content" style={{ width: '300px', display: 'grid', justifyContent: 'center' }}>
              <Typography variant="h6">언더웨어</Typography>
              <MenuItem onClick={handleMenuClose}>전체보기</MenuItem>
              <MenuItem onClick={handleMenuClose}>패키지</MenuItem>
              <MenuItem onClick={handleMenuClose}>와이어브라</MenuItem>
              <MenuItem onClick={handleMenuClose}>노와이어브라</MenuItem>
              <MenuItem onClick={handleMenuClose}>데일리브라탑</MenuItem>
              <MenuItem onClick={handleMenuClose}>스포츠브라탑</MenuItem>
              <MenuItem onClick={handleMenuClose}>팬티</MenuItem>
              <MenuItem onClick={handleMenuClose}>사각드로즈</MenuItem>
              <MenuItem onClick={handleMenuClose}>이지웨어</MenuItem>
              <MenuItem onClick={handleMenuClose}>파자마</MenuItem>
            </div>
            <div className="submenu-content" style={{ width: '300px', borderLeft: '0.5px solid rgb(0,0,0,0.6)', paddingLeft: '30px' }}>
              <Typography variant="h6">스포츠</Typography>
              <MenuItem onClick={handleMenuClose}>테니스</MenuItem>
              <MenuItem onClick={handleMenuClose}>러닝/트레이닝</MenuItem>
            </div>
          </Menu>
        </Toolbar>
      </AppBar>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.custom-pagination',
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          }
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="mySwiper"
      >
        {images.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.src} alt={`slide-${index}`} />
            <div className="slide-title">{item.title}</div>
            {index === 0 && (
              <CustomButton>자세히 보기</CustomButton>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination"></div>
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
      <SwiperComponent />
      <div style={{ position: 'relative', top: '900px' }}>
        <h2 style={{ textAlign: 'center' }}>기획전</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div>
            <img src={event1} alt="event1" style={{ width: '500px', marginRight: '20px' }} />
            <h2 style={{ textAlign: 'center' }}>FILA CUSTOM STUDIO</h2>
            <p style={{ textAlign: 'center' }}>최상의 플레이를 위한 맞춤형 테니스화</p>
            <button style={{
              color: '#000', border: '1px solid #000', top: '680px', left: '330px', position: 'absolute',
              zIndex: 10,
              backgroundColor: 'transparent',
              borderRadius: '30px',
              padding: '15px 50px',
              fontSize: '20px',
              cursor: 'pointer',
            }}>자세히 보기</button>
          </div>
          <div>
            <img src={event2} alt="event2" style={{ width: '500px' }} />
            <h2 style={{ textAlign: 'center' }}>Pertex LIfe</h2>
            <p style={{ textAlign: 'center' }}>휠라 퍼텍스 시리즈와 함께하는 퍼텍스 라이프</p>
            <button style={{
              color: '#000', border: '1px solid #000', top: '680px', left: '850px', position: 'absolute',
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
      <div style={{ position: 'relative', top: '1100px', display: 'grid', justifyContent: 'center' }}>
        <div style={{display:'flex', justifyContent: 'space-between'}}>
          <CameraAltOutlinedIcon />
          <span style={{fontWeight: 'bold'}}>@fila_korea</span>
        </div>
        <div style={{display:'flex'}}>
            <img src={ins1} alt="ins1" style={{width: '200px', height: '200px'}} />
            <img src={ins2} alt="ins2" style={{width: '200px', height: '200px'}} />
            <img src={ins3} alt="ins3" style={{width: '200px', height: '200px'}} />
            <img src={ins4} alt="ins4" style={{width: '200px', height: '200px'}} />
            <img src={ins5} alt="ins5" style={{width: '200px', height: '200px'}} />
        </div>
        <div style={{display:'flex'}}>
            <img src={ins6} alt="ins6" style={{width: '200px', height: '200px'}} />
            <img src={ins7} alt="ins7" style={{width: '200px', height: '200px'}} />
            <img src={ins8} alt="ins8" style={{width: '200px', height: '200px'}} />
            <img src={ins9} alt="ins9" style={{width: '200px', height: '200px'}} />
            <img src={ins10} alt="ins10" style={{width: '200px', height: '200px'}} />
        </div>
      </div>
      <footer style={{position: 'relative', top: '1200px',  backgroundColor: '#ccc', padding: '20px'}}>
        <img src={logoBlack} alt="logoBlack" />
        <div style={{display: 'flex', justifyContent:'space-around'}}>
          <div>
            <h4>매장안내 | 공지사항 | FILA MEMBERSHIP | 단체 판매 | 대리점 개설 문의 | FILA 입찰 참여 안내</h4>
            <br />
            <p>서울특별시 성북구 보문로 35 휠라코리아(주)  대표이사: 김지헌</p>
            <p>사업자등록번호:716-81-01573 사업자정보확인 통신판매업신고:제 2020-서울강동-0160 호</p>
            <p>개인정보 관리책임자:이학우</p>
            <br />
            <p>본 사이트의 상품이미지 저작권은 휠라코리아(주)에 있으며, 내용의 무단복제를 금합니다.</p>
            <p>콘텐츠산업진흥법에 의한 콘텐츠보호안내 자세히보기</p>
            <h4>통합회원 이용약관 | 개인정보 처리방침 | 제보센터</h4>
          </div>
          <div>
            <button style={{
              color: '#000', border: '1px solid #000', top: '680px', left: '850px', position: 'absolute',
              zIndex: 10,
              backgroundColor: 'transparent',
              borderRadius: '30px',
              padding: '10px 20px',
              fontSize: '15px',
              cursor: 'pointer',
            }}>CS CENTER</button>
            <h1>1577-3472</h1>
            <h1>filaonline@fila.com</h1>
            <p>평일 월 ~ 금 : 09시 - 18시 (공휴일 제외)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
