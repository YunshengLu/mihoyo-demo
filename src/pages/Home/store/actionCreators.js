import * as actionTypes from './constants'
import {
    getGameListRequest,
    getActivityListRequest,
} from '@/api/request'

// 过去游戏分区列表
const changeGameList = (data) => ({
    type: actionTypes.SET_GAME_LIST,
    data
})
export const getGameList = () => {
    return (dispatch) =>{
        getGameListRequest().then(data => {
            let list = data.data.list
            dispatch(changeGameList(list))
        })
    }
}

// 获取分区背景图
const getBackgroundList = (data) => ({
    type: actionTypes.GET_BACKGROUND_LIST,
    data
})
export const getBackground = (query) => {
    return (dispatch) => {
        getActivityListRequest(query).then(data => {
            // console.log(data,'===================');
            let list = data.data.background
            dispatch(getBackgroundList(list))
        })
    }
}