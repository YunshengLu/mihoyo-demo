import * as actionTypes from './constants';

const defaultState = {
    resultList: [],
    enterLoading: false,
};

export default (state = defaultState,action) => {
    switch (action.type) {
        case actionTypes.SET_RESULT_LIST:
            return {
                ...state,
                resultList: action.data
            }
        case actionTypes.SET_ENTER_LOADING:
            return {
                ...state,
                enterLoading: action.data
            }
        default:
            return state
    }
}
