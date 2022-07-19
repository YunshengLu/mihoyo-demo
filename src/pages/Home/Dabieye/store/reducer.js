import * as actionTypes from './constants';

const defaultState = {
    ActivityList: [],
    DiscussionList: [],
    officialList: [],
    suggestPostList: [],
    postStat: [],
    carouselsList: [],
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.SET_ACTIVITY_LIST:
            return {
                ...state,
                ActivityList: action.data
            }
        case actionTypes.GET_DISCUSS_LIST:
            return {
                ...state,
                DiscussionList: action.data
            }
        case actionTypes.GET_SUGGESTPOST_LIST:
            return {
                ...state,
                suggestPostList: action.data
            }
        case actionTypes.GET_POSTSTAT_LIST:
            return {
                ...state,
                postStat: action.data
            }
        case actionTypes.GET_CAROUSELS_LIST:
            return {
                ...state,
                carouselsList: action.data
            }
        default:
            return state
    }
}
