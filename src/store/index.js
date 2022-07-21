// 组件 - 中间件redux-thunk - 数据
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // 支持异步数据管理（接口请求）
import reducer from './reducer';

// 这里是启用Redux DevTools，我用的官方文档的第一种方式
// 也可下载插件，那样代码更优雅，我懒，就先这样用着
// compose 合并中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 创建仓库管理数据流 createStore
const store = createStore(reducer,
    composeEnhancers(
        // 异步
        applyMiddleware(thunk)
    )
    )

export default store;