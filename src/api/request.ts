import { axiosInstance } from "./config";

import {
    URL_HOME,
    URL_EMOTICON,
    URL_DYNAMICDATA,
    URL_SEARCH_DEFAULT,
    URL_SEARCH_POSTS,
    URL_HOME_NEW,
    URL_GAMELIST,
    URL_SEARCH_SUGGEST,
    URL_SEARCH_HOTWORD
} from './url'

export const getGameListRequest = () => 
    axiosInstance.get(URL_GAMELIST)

export const getWebHomeRequest = (gids:number,page:number) => {
    const url = `${URL_HOME}?gids=${gids}&page=${page}`
    return axiosInstance.get(url);
}

export const getWebHomeNewRequest = (gids: number) => {
    const url = URL_HOME_NEW + '?gids=' + gids;
    return axiosInstance.get(url);
}

export const getEmoticonRequest = (gids: number) => {
    const url = `${URL_EMOTICON}?gids=${gids}`
    return axiosInstance.get(url)
}

export const getDynamicDataRequest = (gids: number, post_id: number[]) => {
    const url = `${URL_DYNAMICDATA}?gids=${gids}&post_id=${post_id.join(",")}`
    return axiosInstance.get(url)
}

export const getSearchDataRequest = (gids: number, keyword: string) => {
    const url = `${URL_SEARCH_DEFAULT}?gids=${gids}&keyword=${keyword}`
    return axiosInstance.get(url)
}

export const getSearchPostsRequest = (gids: number, keyword: string, last_id:number) => {
    const url = `${URL_SEARCH_POSTS}?gids=${gids}&keyword=${keyword}&last_id=${last_id}`
    return axiosInstance.get(url)
}

export const getSearchHotwordRequest = () => {
    return axiosInstance.get(URL_SEARCH_HOTWORD)
}

export const getSearchSuggestRequest = (keyword: string) => {
    const url = `${URL_SEARCH_SUGGEST}?keyword=${keyword}`
    return axiosInstance.get(url)
}
