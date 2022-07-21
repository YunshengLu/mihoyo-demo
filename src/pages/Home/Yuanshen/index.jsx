import React, { useState, useEffect, memo } from 'react'
import { connect } from 'react-redux'
import { 
    getYuanshenActivityList,
    getYuanshenDiscussion,
    getOfficial,
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
import Official from '@/components/Official'
import SuggestPost from '@/components/SuggestPost'
import { Wrapper } from './style'

const Yuanshen = (props) => {

    // const [postId,setPostId] = useState([])

    const {
        yuanshenActivityList,
        yuanshenDiscussionList,
        officialList,
        suggestPostList,
        postStat,
        carouselsList,
    } = props

    const {
        getYuanshenActivityListDispatch,
        getYuanshenDiscussionListDispatch,
        getOfficialListDispatch,
        getSuggestPostListDispatch,
        getPostStatListDispatch,
        getCarouselsListDispatch,
    } = props

    const getPostID = () => {
        let postId = []
        suggestPostList.map(item => {
            // console.log(item);
            let id = item.post.post_id
            postId.push(id)
            // setPostId([
            //     ...postId,
            //     id
            // ])
        })
        return postId
    }

    useEffect(() => {
        getYuanshenActivityListDispatch(2);
        getYuanshenDiscussionListDispatch(2);
        getOfficialListDispatch(2);
        getSuggestPostListDispatch(2);
        getCarouselsListDispatch(2);
    },[])
    let postIds = getPostID()
    // console.log(postIds.join(),'@@@@@@@@@@@@@@@@');
    // useEffect(() => {
    //     getPostStatListDispatch(2,postIds)
    // },[postIds])
    
    async function doRefresh() {
        await sleep(1000);
        getOfficialListDispatch(2);
        getCarouselsListDispatch(2);
        getSuggestPostListDispatch(2);
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
                <NavigatorList navigator={yuanshenActivityList}/>
                <Discuss discussion={yuanshenDiscussionList}/>
                <Official officialList={officialList}/>
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
        yuanshenActivityList: state.yuanshen.yuanshenActivityList,
        yuanshenDiscussionList: state.yuanshen.yuanshenDiscussionList,
        officialList: state.yuanshen.officialList,
        suggestPostList: state.yuanshen.suggestPostList,
        postStat: state.yuanshen.postStat,
        carouselsList: state.yuanshen.carouselsList,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getYuanshenActivityListDispatch(query){
            dispatch(getYuanshenActivityList(query))
        },
        getYuanshenDiscussionListDispatch(query){
            dispatch(getYuanshenDiscussion(query))
        },
        getOfficialListDispatch(query){
            dispatch(getOfficial(query))
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

export default connect(mapStateToProps, mapDispatchToProps)(memo(Yuanshen))
