import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Main from './components/Main'
import Header from './components/Section/Header'
import Nav from './components/Section/Nav'
import Loading from './components/Loading'
import Like from './components/Like'
import Search from './components/Search'
import Mypage from './components/Mypage'

const AppContent = () => {
    const location = useLocation();

    const shouldShowHeaderAndNav = location.pathname !== '/';

    return (
        <>
            {shouldShowHeaderAndNav && <Header />}
            <Routes>
                <Route path='/main' element={<Main />} />
                <Route path='/' element={<Loading />} />
                <Route path='/like' element={<Like />} />
                <Route path='/search' element={<Search />} />
                <Route path='/mypage' element={<Mypage />} />
            </Routes>
            {shouldShowHeaderAndNav && <Nav />}
        </>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <AppContent />
        </BrowserRouter>
    )
}

export default App