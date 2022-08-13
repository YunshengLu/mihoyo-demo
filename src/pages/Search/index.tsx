import { Outlet, useNavigate } from 'react-router'
import { SearchWrapper, Container, ShortcutWrapper } from './style'
import { memo, useCallback, useState, useEffect } from 'react';
import { InfiniteScroll } from 'antd-mobile'
import { connect } from 'react-redux';
import { rootState } from '@/store';
import { Dispatch, AnyAction } from 'redux';
import SearchBox from '@/components/search-box';
import { FireFill } from 'antd-mobile-icons'
import {
  addSearchHistory,
  removeSearchHistory,
  getSearchHistory,
  highlight
} from '@/utils';
import {
  getSearchHotwordAction,
  getSearchSuggestAction,
  getSearchPostsAction,
  loadSearchPostsAction
} from './store/actions';
import PostItem from '@/components/PostItem';
import { sleep } from 'antd-mobile/es/utils/sleep';

interface SearchProps {
  suggestList: any[],
  hotList: any[],
  postsList: any[],
  loading: boolean,
  getHotwordDispatch: () => void;
  getSuggestListDispatch: (gids: number, keyword: string) => void;
  getSearchPostsDispatch: (gids: number, keyword: string, last_id: number) => void;
  loadSearchPostsDispatch: (gids: number, keyword: string, last_id: number) => void;
}

const Search: React.FC<SearchProps> = (props) => {
  const [show, setShow] = useState(true);
  const [history, setHistory] = useState([])
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  const {
    suggestList,
    hotList,
    postsList,
    loading,
  } = props
  const {
    getHotwordDispatch,
    getSuggestListDispatch,
    getSearchPostsDispatch,
    loadSearchPostsDispatch,
  } = props;

  useEffect(() => {
    setShow(true);
    getHotwordDispatch();
    const history = getSearchHistory();
    setHistory(history)
  }, []);

  useEffect(() => {
    if (query.trim()) {
      getSuggestListDispatch(2, query);
    }
  }, [query])

  // const searchBack = useCallback(() => {
  //   setShow(false)
  // }, [])
  const searchBack = () => {
    navigate(`/`);
  }

  const handleQuery = (q: string) => {
    // console.log(q)
    // 给子组件防抖后得到的数据修改方法
    setQuery(q)
  }

  const linkTo = (value: string) => {
    addSearchHistory(value)
    setQuery(value)
    setPage(1)
    getSearchPostsDispatch(2, value, page)
    navigate(`/search?keyword=${value}`)
    setShow(false)
  }

  const removeHistory = () => {
    removeSearchHistory()
    setHistory([])
  }

  let [page, setPage] = useState(1);
  // 设置 useState,组件刷新不重新赋值
  // let i 会气死

  async function loadMorePosts() {
    await new Promise(resolve => {
      setPage(++page)
      resolve(loadSearchPostsDispatch(2, query, page))
    }
    )
    await sleep(3000)
  }

  const renderSuggests = () => {
    // let list = suggestList ? suggestList : [];
    return suggestList.length > 0 &&
      <div className="m-search-suggest" >
        <ul className="suggest-list">
          {
            suggestList.map((item: { value: string; name: string; }) =>
              <li key={item.value}
                onClick={() => linkTo(item.value)}
                dangerouslySetInnerHTML={{
                  __html:
                    // 自己写了高亮，结果发现他后端给好了`${highlight(query, item.name)}`
                    `${item.name}`
                }}
              >
                {/* {changeColor(query,item.value)} */}
              </li>
            )
          }
        </ul>
      </div>
  }

  const renderHotwords = () => {
    return (
      <div className="m-search-hot">
        <h4 className="title">全社热搜</h4>
        <div className="list">
          {
            hotList.map((item, index) => {
              return (
                <span
                  className="hotword-item"
                  key={item.hot_id}
                  onClick={() => linkTo(item.keyword)}
                >
                  {item.keyword} &nbsp;
                  {index < 3 ?
                    <FireFill className='fire' />
                    : null}
                </span>
              )
            })
          }
        </div>
      </div>
    )
  }

  const renderHistory = () => {
    const list = history ? history : [];
    return list.length > 0 &&
      <div className="m-search-history">
        <div className="title">
          <span className='left'>历史搜索</span>
          <span className='right' onClick={() => removeHistory()}>清空</span>
        </div>
        <ul className="history-list">
          {
            list.map((item: { value: string; }) => {
              return (
                <li key={item.value}
                  onClick={() => linkTo(item.value)}
                >
                  <a>{item.value}</a>
                </li>
              )
            })
          }
        </ul>
      </div>
  }

  const renderPosts = () => {
    return (postsList.map((item: any) =>
      // 筛出 文章对应的点赞等数据
      // let postdata = postIdStat.find(i => i.post_id == item.post.post_id)  
      <PostItem
        key={item.post.post_id}
        post={item.post}
        user={item.user}
        stat={item.stat}
        topics={item.topics}
      />
    )
    )
  }

  return (
    <SearchWrapper>
      <div className="search_box_wrapper">
        <SearchBox
          back={searchBack}
          newQuery={query}
          handleQuery={handleQuery}
          linkTo={linkTo}
          setShow={setShow}
        >
        </SearchBox>
      </div>
      <Container show={show} className='A'>
        <ShortcutWrapper show={query.length > 0}>
          {renderSuggests()}
        </ShortcutWrapper>
        <ShortcutWrapper show={!query}>
          {/* props 传值给 styled-components 做样式业务 */}
          {renderHistory()}
          {renderHotwords()}
        </ShortcutWrapper>
      </Container>
      <Container show={!show} className='B'>
        {renderPosts()}
      </Container>
      {!loading && !show && postsList.length > 0 && <InfiniteScroll loadMore={loadMorePosts} hasMore={true} />}
    </SearchWrapper>

  )
}

const mapStateToProps = (state: rootState) => ({
  hotList: state.search.hotList,
  suggestList: state.search.suggestList,
  postsList: state.search.postsList,
  loading: state.search.loading,
})

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    getHotwordDispatch() {
      dispatch(getSearchHotwordAction());
    },
    getSuggestListDispatch(gids: number, keyword: string) {
      dispatch(getSearchSuggestAction(gids, keyword))
    },
    getSearchPostsDispatch(gids: number, keyword: string, last_id: number) {
      console.log(keyword);
      dispatch(getSearchPostsAction(gids, keyword, last_id))
    },
    loadSearchPostsDispatch(gids: number, keyword: string, last_id: number) {
      dispatch(loadSearchPostsAction(gids, keyword, last_id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Search))

