import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/pages/Home'
import { connect } from "react-redux";
import { rootState } from "@/store";
import Homebase from '@/pages/Homebase'
import Footer from "@/components/Footer";
const Dynamic = lazy(() => import("@/pages/Dynamic"))
const Message = lazy(() => import("@/pages/Message"))
const Mypage = lazy(() => import("@/pages/Mypage"))
const Search = lazy(() => import("@/pages/Search"))
const Cannels = lazy(() => import("@/pages/Cannels"))
const SelectChannel = lazy(() => import("@/pages/SelectChannel"))
import { pathnameDemo } from '@/utils/data'

interface RoutesProps {
    gameList: any[],
    channelList:any[],
}

const RoutesConfig: React.FC<RoutesProps> = (props) => {
    const { gameList, channelList } = props;
    const [list, setList] = useState(gameList);
    useEffect(() => {
        const TrueCheck = channelList.filter(item => item.check == true || item.en_name == 'dby');
        setList(channelList.length ? TrueCheck : pathnameDemo);
    }, [gameList, channelList])

    const gamePath = list.length ? list[0].en_name : pathnameDemo[0].en_name;
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to={`/home/${gamePath}`} replace={true} />} />
                <Route path="/home" element={<Navigate to={`/home/${gamePath}`} />}
                />
                <Route path="/home" element={<Homebase />} >
                    <Route path="/home/ys" element={<Home />} />
                    <Route path="/home/dby" element={<Home />} />
                    <Route path="/home/bh3" element={<Home />} />
                    <Route path="/home/zzz" element={<Home />} />
                    <Route path="/home/sr" element={<Home />} />
                    <Route path="/home/wd" element={<Home />} />
                    <Route path="/home/bh2" element={<Home />} />
                </Route>
                <Route path="/dynamic" element={<Dynamic />}></Route>
                <Route path="/message" element={<Message />}></Route>
                <Route path="/mypage" element={<Mypage />}></Route>
                <Route path="/search" element={<Search />}>
                    {/* <Route path="/search/page" element={<SearchPage />} />
                    <Route path="/search/detail" element={<SearchDetail />} /> */}
                </Route>
                {/* <Route path="/cannels" element={<Cannels />}></Route> */}
                <Route path="/channels" element={<SelectChannel />}></Route>
            </Routes>
            <Footer />
        </>
    )
}
const mapStateToProps = (state: rootState) => ({
    gameList: state.home.gameList,
    channelList:state.home.channelList,
})
export default connect(mapStateToProps)(RoutesConfig)