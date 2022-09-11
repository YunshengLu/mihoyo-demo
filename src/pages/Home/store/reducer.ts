import { AnyAction } from 'redux';
import * as actionTypes from './constants'

export interface home {
    gameList: Array<any>;
    channelList:Array<any>;
    recommendedPosts: Array<any>;
    postIdStat:Array<any>;
    navigator: Array<any>;
    background: Array<any>;
    discussion: Array<any>;
    official: Array<any>;
    carousels: Array<any>;
    hotTopics:Array<any>;
    loading: boolean;
}

const defaultState = {
    gameList: [],
    channelList:[],
    recommendedPosts: [],
    postIdStat:[],
    navigator: [],
    background: {},
    discussion: {},
    official: [],
    carousels: {},
    hotTopics:[],
    loading: true,
}

export default (state = defaultState, action:AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_GAMELIST:
            // console.log(action.data,'++++++++++');
            let list:any[] = action.data;
            list.map(item => item.check = true);
            return {
                ...state,
                gameList: list
            }
        case actionTypes.SET_CHANNELLIST:
            return {
                ...state,
                channelList:action.data,
            }
        case actionTypes.SET_RECOMMENDED_POSTS:
            // console.log(action.data,'++++++++++');
            return {
                ...state,
                recommendedPosts: action.data
            }
        case actionTypes.LOAD_RECOMMENDED_POSTS:
            // console.log(action.data,'++++++++++');
            return {
                ...state,
                recommendedPosts: state.recommendedPosts.concat(action.data)
            }
        case actionTypes.SET_HOME_POSTID_STAT:
            // console.log(action.data,'++++++++++');
            return {
                ...state,
                postIdStat: state.postIdStat.concat(action.data)
            }
        case actionTypes.SET_HOME_NAV:
            // console.log(action.data,'++++++++++');
            return {
                ...state,
                navigator: action.data
            }
        case actionTypes.SET_HOME_BACKGROUND:
            // console.log(action.data,'++++++++++');
            return {
                ...state,
                background: action.data
            }
        case actionTypes.SET_HOME_DISCUSSION:
            // console.log(action.data,'++++++++++');
            return {
                ...state,
                discussion: action.data
            }
        case actionTypes.SET_HOME_OFFICIAL:
            // console.log(action.data,'++++++++++');
            return {
                ...state,
                official: action.data
            }
        case actionTypes.SET_HOME_CAROUSELS:
            // console.log(action.data,'++++++++++');
            return {
                ...state,
                carousels: action.data
            }
        case actionTypes.SET_HOME_HOTTOPICS:
            // console.log(action.data,'++++++++++');
            return {
                ...state,
                hotTopics: action.data
            }
        case actionTypes.SET_HOME_LOADING:
            // console.log("===",action.data);
            return {
                ...state,
                loading:action.data
            }
        default:
            return state;
    }
}