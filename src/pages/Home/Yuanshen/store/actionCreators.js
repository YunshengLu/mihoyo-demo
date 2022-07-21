import * as actionTypes from './constants'
import { getRandomArr } from '@/api/utils'
import {
    getActivityListRequest,
    getPostListRequest,
    getPostStatRequest,
} from '@/api/request'

const changeYuanshenActivityList = (data) => ({
    type: actionTypes.SET_ACTIVITY_LIST,
    data
})
export const getYuanshenActivityList = (query) => {
    return (dispatch) => {
        getActivityListRequest(query).then(data => {
            let list = data.data.navigator
            dispatch(changeYuanshenActivityList(list))
        })
    }
}

const getYuanshenDiscussionList = (data) => ({
    type: actionTypes.GET_DISCUSS_LIST,
    data
})
export const getYuanshenDiscussion = (query) => {
    return (dispatch) => {
        getActivityListRequest(query).then(data => {
            let list = data.data.discussion
            dispatch(getYuanshenDiscussionList(list))
        })
    }
}

const getOfficialList = (data) => ({
    type: actionTypes.GET_OFFICIAL_LIST,
    data
})
export const getOfficial = (query) => {
    return (dispatch) => {
        getActivityListRequest(query).then(data => {
            let lists = data.data.official.data
            let list = getRandomArr(lists,2)
            dispatch(getOfficialList(list))
        })
    }
}

const getSuggestPostList = (data) => ({
    type: actionTypes.GET_SUGGESTPOST_LIST,
    data
})
export const getSuggestPost = (query) => {
    return (dispatch) => {
        getPostListRequest(query).then(data => {
            let list = data.data.recommended_posts
            dispatch(getSuggestPostList(list))
        }) 
    }
}

const getPostStatList = (data) => ({
    type: actionTypes.GET_POSTSTAT_LIST,
    data
})
export const getPostStat = (query,arr) =>{
    return (dispatch) => {
        arr = arr.join()
        console.log(arr,'&&&&&&&&&&&&&&&&&&&&');
        getPostStatRequest(query,arr).then(data => {
            let list = data.data.list
            dispatch(getPostStatList(list))
        })
    }
}

// 轮播图
const getCarouselsList = (data) => ({
    type: actionTypes.GET_CAROUSELS_LIST,
    data
})
export const getCarousels = (query) => {
    return (dispatch) => {
        getPostListRequest(query).then(data => {
            let list = data.data.carousels
            dispatch(getCarouselsList(list))
        })
    }
}
