import { useEffect } from 'react'
import './App.css'
import RouterConfig from './routes'
import { connect } from 'react-redux'
import {
  getGameList,
} from './pages/Home/store/actionCreators'
import Footer from '@/components/Footer'
import { selectGame } from '@/api/utils'

function App(props) {

  const { gameList } = props
  const { getGameListDispatch } = props

  useEffect(() => {
    getGameListDispatch();
  },[])

  const game = gameList && gameList.findIndex(item => item.has_wiki)
  let gamename = selectGame(gameList[game])
  // console.log(selectGame(gameList[game]),'~~~~~~~~~~');

  return (
    <div className="App">
      <Footer />
      <RouterConfig gamename={gamename}/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
      gameList: state.home.gameList,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      getGameListDispatch(){
          dispatch(getGameList())
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
