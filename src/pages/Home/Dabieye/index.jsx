import React, { useState, useEffect, memo } from 'react'
import { connect } from 'react-redux'
import { 
    getActivityList,
    getDiscussion,
    getSuggestPost,
    getPostStat,
    getCarousels,
} from './store/actionCreators'
import Scroll from '@/components/common/scroll/index'
import { forceCheck } from 'react-lazyload'
import { 
    PullToRefresh,
    DotLoading,
    Toast,
} from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import NavigatorList from '@/components/NavigatorList'
import Discuss from '@/components/Discuss'
import SuggestPost from '@/components/SuggestPost'

const Dabieye = (props) => {

    const [postId,setPostId] = useState([])

    const {
        ActivityList,
        DiscussionList,
        suggestPostList,
        postStat,
        carouselsList,
    } = props

    const {
        getActivityListDispatch,
        getDiscussionListDispatch,
        getSuggestPostListDispatch,
        getPostStatListDispatch,
        getCarouselsListDispatch,
    } = props

    const getPostID = () => {
        suggestPostList.forEach(item => {
            let id = +item.post.post_id
            setPostId([
                ...postId,
                id
            ])
        })
    }

    useEffect(() => {
        getActivityListDispatch(5);
        getDiscussionListDispatch(5);
        getSuggestPostListDispatch(5);
        getCarouselsListDispatch(5);
    },[])

    // useEffect(() => {
    //     getPostID()
    //     getPostStatListDispatch(2,postId)
    // },[])

    // console.log(postId,'@@@@@@@@@@@@@@@@');
    
    async function doRefresh() {
        await sleep(1000);
        getOfficialListDispatch(5);
        getCarouselsListDispatch(5);
        getSuggestPostListDispatch(5);
        Toast.show({
            content: '推荐已更新'
        })
    }

    return (
        <div>
            <PullToRefresh
                onRefresh={doRefresh}
                refreshingText={<DotLoading color='#2df4fe'/>}
                completeText={ <h3>&nbsp;&nbsp;</h3>}
            >
            {/* <Scroll> */}
                <NavigatorList navigator={ActivityList}/>
                <Discuss discussion={DiscussionList}/>
                <SuggestPost 
                    suggestPostList={suggestPostList}
                    postStat={postStat}
                    carouselsList={carouselsList}
                />
            {/* </Scroll> */}
            </PullToRefresh>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        ActivityList: state.dabieye.ActivityList,
        DiscussionList: state.dabieye.DiscussionList,
        suggestPostList: state.dabieye.suggestPostList,
        postStat: state.dabieye.postStat,
        carouselsList: state.dabieye.carouselsList,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getActivityListDispatch(query){
            dispatch(getActivityList(query))
        },
        getDiscussionListDispatch(query){
            dispatch(getDiscussion(query))
        },
        getBackgroundListDispatch(query){
            dispatch(getBackground(query))
        },
        getSuggestPostListDispatch(query){
            dispatch(getSuggestPost(query))
        },
        getPostStatListDispatch(query,arr){
            dispatch(getPostStat(query,arr))
        },
        getCarouselsListDispatch(query) {
            dispatch(getCarousels(query))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(Dabieye))
