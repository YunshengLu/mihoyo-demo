import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '@/store'
import { GlobalStyle } from '@/assets/global-style'
import '@/assets/iconfont/iconfont.css'
import 'swiper/css';
import 'react-photo-view/dist/react-photo-view.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </Provider>
)
