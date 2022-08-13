import { applyMiddleware, compose, createStore } from 'redux'
import reducers from './reducers'
import thunk, { ThunkMiddleware } from 'redux-thunk'


// window interface __REDUX_DEVTOOLS_EXTENSION_COMPOSE__
// ts as 强制类型声明 断言 (any 摆烂ovo)
const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(
            //thunk as 断言 , dispatch 异步action ts->ThunkMiddleware
            thunk as ThunkMiddleware
        )
    )
)
// rootState  state 状态类型
// type interface 都是 ts 类型申明
// type 自定义类型 rootState:
// 用 ReturnType 取出 < typeof reducers > 返回值的类型
// 而 typeof xxx 又是 xxx中类型限定的 其中之一
export type rootState = ReturnType<typeof reducers>

export default store 