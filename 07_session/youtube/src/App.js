import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

const Home = lazy(() => import('./screens/Home'));
const Today = lazy(() => import('./screens/Today'));
const Developer = lazy(() => import('./screens/Developer'));
const Webd = lazy(() => import('./screens/Webd'));
const Website = lazy(() => import('./screens/Website'));
const Gsap = lazy(() => import('./screens/Gsap'));
const Port = lazy(() => import('./screens/Port'));
const Youtube = lazy(() => import('./screens/Youtube'));
const Channel = lazy(() => import('./screens/Channel'));
const Video = lazy(() => import('./screens/Video'));
const Search = lazy(() => import('./screens/Search'));
const Not = lazy(() => import('./screens/Not'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<Main />}>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path="/today" element={<Today />} />
                    <Route path="/developer" element={<Developer />} />
                    <Route path="/webd" element={<Webd />} />
                    <Route path="/website" element={<Website />} />
                    <Route path="/gsap" element={<Gsap />} />
                    <Route path="/port" element={<Port />} />
                    <Route path="/youtube" element={<Youtube />} />
                    <Route path='/channel/:channelId' element={<Channel />} />
                    <Route path='/video/:videoId' element={<Video />} />
                    <Route path='/search/:searchId' element={<Search />} />
                    <Route path="*" element={<Not />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;