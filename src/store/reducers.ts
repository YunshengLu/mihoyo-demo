import { combineReducers, AnyAction } from 'redux';

import { reducer as HomeReducer } from
    '@/pages/Home/store'

import { reducer as SearchReducer } from
    '@/pages/Search/store'

export default combineReducers({
    home: HomeReducer,
    search: SearchReducer,
})


