import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter } from 'react-router-dom' 
import { Provider } from 'react-redux'
import { GlobalStyle } from './style'
import store from './store'
import 'swiper/css/swiper.css'
// import 'swiper/css'
import '@/assets/iconfont/iconfont.css'
// import '@/modules/rem'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <HashRouter>
    <GlobalStyle />
      <App />
    </HashRouter>
  </Provider>
)
