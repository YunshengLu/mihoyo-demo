import * as actionTypes from './constants';

const defaultState = {
    gameList: [],
    activityBackground: [],
    backgroundList: [],
}

export default (state = defaultState, action) => {
    // console.log(action,'[][][][]');

    switch (action.type) {
        case actionTypes.SET_GAME_LIST:
            return {
                ...state,
                gameList: action.data
            }
        case actionTypes.GET_BACKGROUND_LIST:
            return {
                ...state,
                backgroundList: action.data
            }
        case actionTypes.AFFIRM_CHANGE_GAME:
            let changeList = state.gameList
            console.log(changeList,'++++++++++++');
            changeList.map(item => {
                action.data.map(actionitem => {
                    if(item.id == actionitem.id){
                        item.has_wiki = actionitem.has_wiki
                    }
                })
                // item.id == action.data
            })
            // changeList = action.data
            return {
                ...state,
                gameList: changeList
            }
        default:
            return state
    }
}
