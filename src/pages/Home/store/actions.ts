import * as actionTypes from './constants'
import {
    getDynamicDataRequest,
    getWebHomeNewRequest,
    getWebHomeRequest,
    getGameListRequest
} from '@/api/request'
import { Dispatch } from 'redux'

const setLoading = (data:boolean) => ({
    type: actionTypes.SET_HOME_LOADING,
    data
})
const setGameList = (data: any[]) => ({
    type: actionTypes.SET_GAMELIST,
    data
})
export const setChannelList = (data: any[]) => ({
    type: actionTypes.SET_CHANNELLIST,
    data
})

// Home api 部分分仓 ：
// 推荐文章列表
const setRecommendedPosts = (data:any[]) => ({
    type: actionTypes.SET_RECOMMENDED_POSTS,
    data
})
const loadRecommendedPosts = (data: any[]) => ({
    type: actionTypes.LOAD_RECOMMENDED_POSTS,
    data
})
const setHomePostIdStat = (data: any[]) => ({
    type: actionTypes.SET_HOME_POSTID_STAT,
    data
})

// Homenew api 部分分仓 :
// 各板块导航栏 navigator + background
const setHomeNav = (data: any[]) => ({
    type: actionTypes.SET_HOME_NAV,
    data
})
const setHomeBackground = (data: {}) => ({
    type: actionTypes.SET_HOME_BACKGROUND,
    data
})
// 讨论栏 discussion
const setHomeDiscussion = (data: {}) => ({
    type: actionTypes.SET_HOME_DISCUSSION,
    data
})
// 官方资讯 official
const setHomeOfficial = (data: {data:any[]}) => ({
    type: actionTypes.SET_HOME_OFFICIAL,
    data: data ? data.data : []
})
// 滑块栏 carousels
const setHomeCarousels = (data: { data: any[] }) => ({
    type: actionTypes.SET_HOME_CAROUSELS,
    data
})
// 热门主题栏 hot_topics
const setHomeHotTopics = (data: { data: any[] }) => ({
    type: actionTypes.SET_HOME_HOTTOPICS,
    data
})
export const loadRecommendedPostsAction = (gids: number, page: number) => {
    return (dispatch: Dispatch) => {
        getWebHomeRequest(gids, page)
            .then(data => {
                dispatch(loadRecommendedPosts(data.data.recommended_posts))
                return data.data.recommended_posts.map((item: any) => item.post.post_id)
            })
            .then(data => {
                getDynamicDataRequest(gids, data)
                    .then(some => dispatch(setHomePostIdStat(some.data.list)))
            })
    }
}

export const getHomeDataAction = (gids: number, page: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        Promise.all([
            getGameListRequest(),
            getWebHomeRequest(gids,page),
            getWebHomeNewRequest(gids),
        ])
            .then(([gamelistResult,homeResult,homenewResult]) => {
                // console.log(data);
                dispatch(setGameList(gamelistResult.data.list))
                dispatch(setRecommendedPosts(homeResult.data.recommended_posts))
                dispatch(setHomeNav(homenewResult.data.navigator))
                dispatch(setHomeBackground(homenewResult.data.background))
                dispatch(setHomeDiscussion(homenewResult.data.discussion))
                dispatch(setHomeOfficial(homenewResult.data.official))
                dispatch(setHomeCarousels(homenewResult.data.carousels))
                dispatch(setHomeHotTopics(homenewResult.data.hot_topics))
                return homeResult.data.recommended_posts.map((item:any)=>item.post.post_id)
            })
            .then(data => {
                // console.log(data);
                getDynamicDataRequest(gids, data)
                    .then(some => dispatch(setHomePostIdStat(some.data.list)))
                    .then(() => dispatch(setLoading(false)))
            })
    }
}