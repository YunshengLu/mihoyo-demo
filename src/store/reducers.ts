import { combineReducers, AnyAction } from 'redux';

import { reducer as HomeReducer, home } from
    '@/pages/Home/store'

import { reducer as SearchReducer } from
    '@/pages/Search/store'

export interface ReducerState {
    home: home;
}

export default combineReducers({
    home: HomeReducer,
    search: SearchReducer,
})


