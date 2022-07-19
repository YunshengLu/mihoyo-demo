import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home';
const Dynamic = lazy(() => import('@/pages/Dynamic'))
const Information = lazy(() => import('@/pages/Information'))
const Mypage = lazy(() => import('@/pages/Mypage'))
const Search = lazy(() => import('@/pages/Search'))
const SelectChannel = lazy(() => import('@/pages/SelectChannel'))
const Yuanshen = lazy(() => import('@/pages/Home/Yuanshen'))
const Dabieye = lazy(() => import('@/pages/Home/Dabieye'))

const RouterConfig = ({gamename}) => {
    // console.log(gamename,"++++++++++++++++");
    return (
        <Suspense fallback={null}>
        <Routes>
            {/* <Route path="/" element={<Navigate to="/home/dabieye"/>} replace={true} />
            <Route path="/home" element={<Navigate to="/home/dabieye"/>} replace={true} /> */}
            <Route path="/" element={<Navigate to={`/home/${gamename}`}/>} replace={true} />
            <Route path="/home" element={<Navigate to={`/home/${gamename}`}/>} replace={true} />
            <Route path="/dynamic" element={<Dynamic />} />
            <Route path="/information" element={<Information />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/search" element={<Search />} />
            <Route path="/select" element={<SelectChannel/>} />
            <Route path="/home" element={<Home />} >
                <Route path="/home/yuanshen" element={<Yuanshen/>} />
                <Route path="/home/dabieye" element={<Dabieye/>} />
            </Route>
        </Routes>
        </Suspense>
    );
};

export default RouterConfig;
