import { AnyAction } from 'redux';
import * as actionTypes from './constants'

const defaultState = {
    suggestList: [],
    TopicsList:[],
    postsList: [],
    hotList:[],
    loading: false,
}

export default (state = defaultState, action: AnyAction) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_SUGGEST:
            // console.log(action.data,'++++++++++');
            return {
                ...state,
                suggestList: action.data
            }
        case actionTypes.SET_SEARCH_HOTWORD:
            return {
                ...state,
                hotList: action.data
            }
        case actionTypes.SET_SEARCH_POSTS:
            return {
                ...state,
                postsList:action.data
                // postsList:[...new Set(state.postsList.concat(action.data))]
            }
        case actionTypes.LOAD_SEARCH_POSTS:
            return {
                ...state,
                postsList: state.postsList.concat(action.data)
            }
        case actionTypes.SET_SEARCH_DATA:
            return {
                ...state,
                TopicsList:action.data
            }
        case actionTypes.SET_SEARCH_LOADING:
            return {
                ...state,
                loading: action.data
            }
        default:
            return state;
    }
}