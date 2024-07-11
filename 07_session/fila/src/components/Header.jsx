import { AppBar, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import logo from '../assets/img/logo.svg'
import React, { useState } from 'react'

const Header = () => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
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
        </>
    )
}

export default Header