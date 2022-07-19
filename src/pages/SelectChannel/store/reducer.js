import * as actionTypes from './constants';

const defaultState = {
    gameList: [],
}

export default (state = defaultState, action) => {
    console.log(action,'[][][][]');
    switch (action.type) {
        case actionTypes.SET_GAME_LIST:
            return {
                ...state,
                gameList: action.data
            }
        case actionTypes.CHOOSE_GAME_LIST:
            let chooseGame = state.gameList
            chooseGame.map(item => {
                if (item.id == action.data.id) {
                    item.has_wiki = !item.has_wiki
                }
            })
            return{
                ...state,
                gameList: action.data
            }
        default:
            return state
    }
}
