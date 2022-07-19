import React, { useState, useEffect } from 'react'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import {
    getGameList,
    getBackground,
} from './store/actionCreators'
import HomeDetailNav from '@/components/HomeDetailNav'
import { SplitPath } from '@/api/utils'
import { Wrapper } from './style'

const Home = (props) => {

    // const [pathNum,setPathNum] = useState(2)
    const { pathname } = useLocation();
    let gameId = SplitPath(pathname) 
    // setPathNum(gameId)

    const {
        gameList,
        backgroundList,
    } = props

    const {
        getGameListDispatch,
        getBackgroundListDispatch,
    } = props

    useEffect(() => {
        getGameListDispatch();
        // getBackgroundListDispatch(pathNum);
    },[])

    useEffect(() => {
        getBackgroundListDispatch(gameId);
    },[gameId])
    // console.log(gameId);
    // console.log(backgroundList);
    let imageUrl = backgroundList.image
    console.log(imageUrl,'?????????');
    
    return (
        <Wrapper imageUrl={imageUrl}>
            <HomeDetailNav 
                gameList={gameList} 
                backgroundList={backgroundList}
            />
        </Wrapper>
    )
}

const mapStateToProps = (state) => {
    return {
        gameList: state.home.gameList,
        backgroundList: state.home.backgroundList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGameListDispatch(){
            dispatch(getGameList())
        },
        getBackgroundListDispatch(data){
            dispatch(getBackground(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

