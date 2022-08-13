import * as actionTypes from './constants'
import {
    getSearchHotwordRequest,
    getSearchDataRequest,
    getSearchPostsRequest,
    getSearchSuggestRequest,
} from '@/api/request'
import { Dispatch } from 'redux'

const setSearchSuggest = (data:any[]) => ({
    type: actionTypes.SET_SEARCH_SUGGEST,
    data
})

const setSearchHotword = (data: any[]) => ({
    type: actionTypes.SET_SEARCH_HOTWORD,
    data
})

const setSearchData = (data: any[]) => ({
    type: actionTypes.SET_SEARCH_DATA,
    data
})

const setSearchPosts = (data: any[]) => ({
    type: actionTypes.SET_SEARCH_POSTS,
    data
})

const loadSearchPosts = (data: any[]) => ({
    type: actionTypes.LOAD_SEARCH_POSTS,
    data
})

const setLoading = (data: boolean) => ({
    type: actionTypes.SET_SEARCH_LOADING,
    data
})

export const getSearchHotwordAction = () => {
    return (dispatch: Dispatch) => {
        setLoading(true)
        getSearchHotwordRequest()
            .then((data: any) => {
                dispatch(setSearchHotword(data.list))
                dispatch(setLoading(false))
            })
    }
}
export const getSearchSuggestAction = (gids:number,keyword:string) => {
    return (dispatch: Dispatch) => {
        dispatch(setLoading(true))
        Promise.all([
            getSearchDataRequest(gids, keyword),
            getSearchSuggestRequest(keyword),
        ])
            .then(([searchDataResult, searchSuggestResult]) => {
                let resSuggest = Object.values(searchSuggestResult);
                dispatch(setSearchData(searchDataResult.data))
                dispatch(setSearchSuggest(resSuggest))
            })
            .then(() => dispatch(setLoading(false)))
    }
}

export const getSearchPostsAction = (gids: number, keyword: string, last_id: number) => {
    return (dispatch: Dispatch) => {
        setLoading(true)
        getSearchPostsRequest(gids, keyword, last_id)
            .then((data: any) => {
                dispatch(setSearchPosts(data.data.posts))
                dispatch(setLoading(false))
            })
        
    }
}
export const loadSearchPostsAction = (gids: number, keyword: string, last_id: number) => {
    return (dispatch: Dispatch) => {
        getSearchPostsRequest(gids, keyword, last_id)
            .then((data: any) => {
                dispatch(loadSearchPosts(data.data.posts))
            })

    }
}
