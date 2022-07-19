import { combineReducers } from "redux";
import { reducer as homeReducer } from "@/pages/Home/store/index";
import { reducer as yuanshenReducer } from "@/pages/Home/Yuanshen/store/index";
import { reducer as dabieyeReducer } from "@/pages/Home/Dabieye/store/index";
import { reducer as searchReducer } from "@/pages/Search/store/index";
import { reducer as selectReducer } from "@/pages/SelectChannel/store/index";

export default combineReducers({
    home: homeReducer,
    yuanshen: yuanshenReducer,
    dabieye: dabieyeReducer,
    search: searchReducer,
    select: selectReducer
})