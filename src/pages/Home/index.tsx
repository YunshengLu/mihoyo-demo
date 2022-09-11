import React, { ReactNode, useEffect, memo, useState } from 'react';
import { rootState } from '@/store';
import { connect } from 'react-redux';
import { AnyAction, Dispatch } from 'redux';
import PostItem from '@/components/PostItem';
import OfficialBar from '@/components/OfficialBar';
import Discuss from '@/components/Discuss';
import HotTopics from '@/components/HotTopics';
import Carousels from '@/components/Carousels';
import ActivityBar from '@/components/ActivityBar';
import HomeDetailNav from '@/components/HomeDetailNav';
import Loading from '@/components/Loading';
import { pathnameDemo } from '@/utils/data';
import { getHomeDataAction, loadRecommendedPostsAction } from './store/actions';
import { HomeWrapper } from './style';
import { OfficialItem, HotTopicsIn, CarouselsIn, NavigatorItem } from '@/models';
import { TagOutline } from 'antd-mobile-icons';
import { getRandomArrayElements } from '@/utils';
import { useLocation, useNavigate } from 'react-router';
import { InfiniteScroll } from 'antd-mobile';
import { sleep } from 'antd-mobile/es/utils/sleep';
import { ReducerState } from '@/store/reducers';

interface HomeProps {
    loading: boolean;
    navigator: NavigatorItem[];
    background: {
        image: string;
    };
    discussion: {
        icon: string;
        title: string;
        prompt: string;
    };
    official: OfficialItem[];
    carousels: CarouselsIn;
    hotTopics: HotTopicsIn;
    recommendedPosts: any[];
    postIdStat: any[];
    gameList: any[];
    channelList: any[];
    getHomeDataActionDispatch: (gids: number, page: number) => void;
    loadRecommendedPostsDispatch: (gids: number, page: number) => void;
}

const Home: React.FC<HomeProps> = props => {
    const {
        recommendedPosts,
        navigator,
        background,
        discussion,
        official,
        carousels,
        hotTopics,
        loading,
        postIdStat,
        gameList,
        channelList,
    } = props;
    const { getHomeDataActionDispatch, loadRecommendedPostsDispatch } = props;
    // const [ topicsPosition, SetTopicsPosition ] = useState<number>(7);
    const { pathname } = useLocation();
    // console.log(pathname);
    const urlPartition = pathname.match(/[\w]+/g) || ['ys', 'dby', 'bh3'];
    let partition =
        // gameList.find(item => item.en_name == urlPartition[1]) ||
        pathnameDemo.find(item => item.en_name == urlPartition[1]) || { id: 2 };
    // 匹配 多级路由 eg: urlPartition[0] 一级 urlPartition[1] 二级
    // console.log(urlPartition);
    // console.log(partition.id);

    const position = hotTopics ? hotTopics.position : 7;

    useEffect(() => {
        // SetTopicsPosition(position)
    }, []);

    useEffect(() => {
        getHomeDataActionDispatch(partition.id, 1);
    }, [pathname]);

    const renderPosts = (begin: number, end?: number) =>
        recommendedPosts.slice(begin, end).map(item => {
            // 筛出 文章对应的点赞等数据
            let postdata = postIdStat.find(i => i.post_id == item.post.post_id);
            return (
                postdata && (
                    <PostItem
                        key={item.post.post_id}
                        post={item.post}
                        user={item.user}
                        stat={postdata.stat}
                        topics={item.topics}
                    />
                )
            );
        });

    let [page, setPage] = useState(1);
    // 设置 useState,组件刷新不重新赋值
    async function loadMorePosts() {
        await new Promise(resolve => {
            setPage(++page);
            resolve(loadRecommendedPostsDispatch(partition.id, page));
        });
        await sleep(3000);
    }

    return (
        <HomeWrapper image={background.image}>
            <HomeDetailNav gameList={gameList} channelList={channelList} discussion={discussion} />
            {loading ? (
                <Loading></Loading>
            ) : (
                <div className="pageContainer">
                    {navigator.length > 0 && <ActivityBar navigator={navigator} />}
                    <Discuss discussion={discussion} />
                    {official.length > 0 && (
                        <OfficialBar official={getRandomArrayElements(official, 2)} />
                    )}
                    <div className="nav">
                        <div className="bar_title">
                            <TagOutline className="icon" /> 推荐
                        </div>
                    </div>

                    {recommendedPosts.length > 0 &&
                        postIdStat.length > 0 &&
                        renderPosts(0, carousels.position)}

                    {carousels.data && carousels.data.length > 0 && (
                        <Carousels carousels={carousels} />
                    )}

                    {recommendedPosts.length > 0 &&
                        postIdStat.length > 0 &&
                        renderPosts(carousels.position, position)}

                    {hotTopics && hotTopics.data && hotTopics.data.length > 0 && (
                        <HotTopics hotTopics={hotTopics} />
                    )}

                    {recommendedPosts.length > 0 && postIdStat.length > 0 && renderPosts(position)}

                    <div className="list">
                        {!loading && recommendedPosts.length > 0 && (
                            <InfiniteScroll
                                loadMore={loadMorePosts}
                                hasMore={true}
                                threshold={500}
                            />
                        )}
                    </div>
                </div>
            )}
        </HomeWrapper>
    );
};

const mapStateToProps = (state: ReducerState) => ({
    recommendedPosts: state.home.recommendedPosts,
    postIdStat: state.home.postIdStat,
    navigator: state.home.navigator,
    background: state.home.background,
    discussion: state.home.discussion,
    official: state.home.official,
    carousels: state.home.carousels,
    hotTopics: state.home.hotTopics,
    loading: state.home.loading,
    gameList: state.home.gameList,
    channelList: state.home.channelList,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
    loadRecommendedPostsDispatch(gids: number, page: number) {
        dispatch(loadRecommendedPostsAction(gids, page));
    },
    getHomeDataActionDispatch(gids: number, page: number) {
        dispatch(getHomeDataAction(gids, page));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
