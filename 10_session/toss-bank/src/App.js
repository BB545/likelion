import React from 'react';
import Header from './components/header_section/Header'
import Main from './pages/Main';
import Footer from './components/footer_section/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RoadMap from './pages/RoadMap';
import ShareHolders from './pages/ShareHolders';
import WideCard from './pages/WideCard';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about/location" element={<RoadMap />} />
        <Route path="/about/shareholders" element={<ShareHolders />} />
        <Route path="/card/widecard" element={<WideCard />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App