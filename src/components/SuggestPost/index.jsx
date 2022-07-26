import React, { useEffect, useState } from "react"
import {
    Wrapper,
    ItemConent,
    Item,
    SwiperItem,
    TabItem,
    ContentWrapper,
    ImageItem,
    CoverImg
} from "./style"
import Swiper from "swiper"
import classnames from "classnames"
import { getGMT } from '@/api/utils'
import { Popup } from 'antd-mobile'
import { 
    MoreOutline,
    ExclamationTriangleOutline, 
    ScanningFaceOutline, 
    BankcardOutline, 
    FileWrongOutline,
} from 'antd-mobile-icons'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import LazyLoad from 'react-lazyload'
import th from './th.gif'

const SuggestPost = ({suggestPostList, carouselsList}) => {

    const frontPost = suggestPostList.slice(0,2)
    // console.log(frontPost);
    const lastPost = suggestPostList.slice(2)

    let swiper = null;
    useEffect(() => {
        if(swiper) return;
        swiper = new Swiper('.swiper-container',{
            observer: true,
            observerParants: true,
            slidesPerView : 'auto',
            freeMode: {
                enabled: true,
            },
        })
    },[])

    const carousels = () => {
        return (
            <SwiperItem>
                <div className="swiper-container mySwiper">
                    <div className="swiper-wrapper">
                        {
                        carouselsList.map((item,index) =>
                            <div key={index} className="swiper-slide">
                                <img src={item.cover} />
                            </div>
                        )
                        }
                    </div>
                </div>
            </SwiperItem>
        )
    }

    return (
        <Wrapper>
            <div className="suggest">
                <i className="iconfont icon-tuijian"></i>
                <p>推荐</p>
            </div>
            {
                frontPost.length > 0 && 
                    frontPost.map((item,index) =>(
                        <SuggestPostContent
                            key={index}
                            Post={item}
                        />
                    ))
            }
            {carousels()}
            {
                lastPost.length > 0 && 
                lastPost.map((item,index) =>(
                        <SuggestPostContent
                            key={index}
                            Post={item}
                        />
                    ))
            }
        </Wrapper>
    )
}

// 首页推荐内容
const SuggestPostContent = ({Post}) => {

    const [guanzhu,setGuanzhu] = useState('+ 关注')
    const [isAttention,setIsAttention] = useState(false)
    const [visible, setVisible] = useState(false);
    // console.log(Post);
   // 关注按钮事件
    const attention = () => {
        if(guanzhu == '+ 关注'){
            setGuanzhu('已关注')
        }else{
            setGuanzhu('+ 关注')
        }
        setIsAttention(!isAttention)
    }

    // 关注旁边的举报等信息弹出层
    const details = (name) => {
        return (
            <>
                <TabItem
                    onClick={() => {
                        setVisible(true);
                    }}
                >
                    <div className="input">
                        <MoreOutline />
                    </div>
                </TabItem>
                <Popup
                    visible={visible}
                    onMaskClick={() => {
                        setVisible(false);
                    }}
                    bodyStyle={{
                        borderTopLeftRadius: '0.5rem',
                        borderTopRightRadius: '0.5rem',
                        height: '12rem',
                    }}
                >
                <ContentWrapper>
                    <a href="#">
                        <div>
                            <FileWrongOutline />
                        </div>
                        <span>
                            减少此类内容
                        </span>
                    </a>    
                    <a href="#">
                        <div>
                            <ScanningFaceOutline />
                        </div>
                        <span>
                            不看作者: {name}
                        </span>
                    </a>                            
                    <a href="#">
                        <div>
                            <BankcardOutline />
                        </div>
                        <span>
                            减少{}版区内容
                        </span>
                    </a>                            
                    <a href="#">
                        <div>
                            <ExclamationTriangleOutline />
                        </div>
                        <span>
                            举报
                        </span>
                    </a>
                    <div className="close" onClick={() => setVisible(false)}>取消</div>
                </ContentWrapper>
                </Popup>
            </>
        )
    }

    // const coverImg = () => {
    //     let coverImgs = Post.post.images
    //     let len = coverImgs.length
    //     let Img = []
    //     for(let i = 0;i < 3; i++) {
    //         Img.push(coverImgs[i])
    //     }
    //     return Img
    // }
    
    return (
        <ItemConent>
            <Item>
                <div className="header">
                    <div className="avatar">
                        <img className="avatar_url" src={Post.user.avatar_url}/>
                        <img className={classnames({pendant: Post.user.pendant})} 
                            src={Post.user.pendant ? Post.user.pendant : null} />
                    </div>
                    <div className="user_name">
                        <div>
                            <span>{Post.user.nickname}</span>
                            <p>{Post.user.level_exp.level}</p>
                        </div>
                        <span className="post_time">{getGMT(Post.post.created_at)}</span>
                    </div>
                    {/* {item.post.post_id} */}
                    <div 
                        className={classnames("attention",{is_attention: isAttention})}
                        onClick={() => attention()}
                    >
                        {guanzhu}
                    </div>
                    {details(Post.user.nickname)}
                </div>
            </Item>
            
            <div className="content">
                <span className="post_subject">{Post.post.subject}</span>
                {
                    Post.post.content && 
                    <span className="post_content">
                        {Post.post.content}
                    </span>
                }
            </div>
            
            <LazyLoad 
                placeholder={<img width="100%" 
                height="100%" src={th} />}>
            <PhotoProvider>
            <div className="cover_container">
                {
                    Post.post.cover && 
                    <PhotoView src={Post.post.cover}>
                    <CoverImg 
                        coverUrl={Post.post.cover}
                        viewType={Post.post.view_type}
                        />
                    </PhotoView>
                }
                {
                Post.post.images && !Post.post.cover &&
                Post.post.images.map((item, index) =>(
                        <PhotoView key={index} src={item}>
                        <ImageItem imgUrl={item} />
                        </PhotoView>
                        ))
                }
                {
                    Post.post.images.length > 2 && !Post.post.cover &&
                    <div className="label">
                        <i className='iconfont icon-gengduotupian'></i>
                        +{Post.post.images.length}
                    </div>
                }
            </div>
            </PhotoProvider>
            </LazyLoad>

            <div className="footer"></div>
        </ItemConent>
    )
}




export default SuggestPost