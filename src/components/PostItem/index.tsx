import React, { useState } from 'react';
import { getGMT, NumberFormat } from '@/utils';
import {
    PostHeader,
    PostMessage,
    PostFooter,
    PostWrapper,
    ContentWrapper,
    CoverImg,
    TwoImageItem,
    MoreImageItem,
} from './style';
import classnames from 'classnames';
import {
    MoreOutline,
    ExclamationTriangleOutline,
    ScanningFaceOutline,
    BankcardOutline,
    FileWrongOutline,
    FlagOutline,
    PictureOutline,
} from 'antd-mobile-icons';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import LazyLoad from 'react-lazyload';
import { Popup } from 'antd-mobile';
import loadingImg from '@/assets/loading.svg';

interface PostItemProps {
    post: {
        created_at: string;
        subject: string;
        content: string;
        post_status: {
            is_official: boolean;
        };
        images: string[];
        cover: string;
        view_type: number;
    };
    user: {
        avatar_url: string;
        pendant: string;
        nickname: string;
        level_exp: { level: string };
    };
    stat: {
        view_num: number;
        reply_num: number;
        like_num: number;
    };
    topics: any[];
}

const PostItem: React.FC<PostItemProps> = props => {
    const { post, user, stat, topics } = props;
    // console.log(post);
    const [guanzhu, setGuanzhu] = useState('+ 关注');
    const [isAttention, setIsAttention] = useState(false);
    const [visible, setVisible] = useState(false);
    // 关注按钮事件
    const attention = () => {
        if (guanzhu == '+ 关注') {
            setGuanzhu('已关注');
        } else {
            setGuanzhu('+ 关注');
        }
        setIsAttention(!isAttention);
    };
    // 关注旁边的举报等信息弹出层
    const details = (name: string) => {
        return (
            <>
                <div
                    className="input"
                    onClick={() => {
                        setVisible(true);
                    }}
                >
                    <MoreOutline />
                </div>
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
                            <span>减少此类内容</span>
                        </a>
                        <a href="#">
                            <div>
                                <ScanningFaceOutline />
                            </div>
                            <span>不看作者: {name}</span>
                        </a>
                        <a href="#">
                            <div>
                                <BankcardOutline />
                            </div>
                            <span>减少{}版区内容</span>
                        </a>
                        <a href="#">
                            <div>
                                <ExclamationTriangleOutline />
                            </div>
                            <span>举报</span>
                        </a>
                        <div className="close" onClick={() => setVisible(false)}>
                            取消
                        </div>
                    </ContentWrapper>
                </Popup>
            </>
        );
    };

    return (
        <PostWrapper>
            <PostHeader>
                <div className="user">
                    <div className="avatar">
                        <img className="avatar_url" src={user.avatar_url} />
                        {user.pendant ? <img className="pendant" src={user.pendant} /> : <></>}
                    </div>
                    <div className="base">
                        <div className="nickname">
                            {user.nickname}
                            <span className="level">{user.level_exp.level}</span>
                        </div>
                        <div className="created_at">{getGMT(post.created_at)}</div>
                    </div>
                </div>
                <div className="right">
                    <div
                        className={classnames('attention', { is_attention: isAttention })}
                        onClick={() => attention()}
                    >
                        {guanzhu}
                    </div>
                    {details(user.nickname)}
                </div>
            </PostHeader>

            <div className="PostBody">
                <PostMessage>
                    <div className="subject">
                        {post.post_status.is_official && <div className="is_official">官</div>}
                        {post.subject}
                    </div>
                    <div className="content">{post.content}</div>
                </PostMessage>
                <LazyLoad placeholder={<img width="30%" height="30%" src={loadingImg} />}>
                    <PhotoProvider photoClosable={true} loop={false}>
                        <div className="cover_container">
                            {post.cover && (
                                <>
                                    <PhotoView src={post.cover}>
                                        <CoverImg coverUrl={post.cover} viewType={post.view_type} />
                                    </PhotoView>
                                    {post.images.length > 1 && post.view_type == 1 && (
                                        <div className="label">
                                            <PictureOutline />
                                            &nbsp;+ {post.images.length}
                                        </div>
                                    )}
                                </>
                            )}
                            {!post.cover && post.images.length == 1 && (
                                <PhotoView src={post.images[0]}>
                                    <CoverImg coverUrl={post.images[0]} viewType={2} />
                                </PhotoView>
                            )}
                            {!post.cover && post.images.length == 2 && (
                                <div className="two_container">
                                    {post.images.map((item, index) => (
                                        <PhotoView key={index} src={item}>
                                            <TwoImageItem imgUrl={item} />
                                        </PhotoView>
                                    ))}
                                </div>
                            )}
                            {!post.cover && post.images.length > 2 && (
                                <>
                                    <div className="three_container">
                                        {post.images.map((item, index) => (
                                            <PhotoView key={index} src={item}>
                                                <MoreImageItem imgUrl={item} />
                                            </PhotoView>
                                        ))}
                                        <div className="label">
                                            <PictureOutline />
                                            &nbsp;+ {post.images.length}
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </PhotoProvider>
                </LazyLoad>
            </div>

            <PostFooter>
                <div className="topics">
                    {topics.length > 0 && (
                        <span>
                            {' '}
                            {topics[0].content_type == 3 && <FlagOutline />}{' '}
                            {topics.length > 0 && topics[0].name}
                        </span>
                    )}
                </div>
                <div className="stat">
                    <i className="iconfont icon-yanjing" />
                    <span>{NumberFormat(stat.view_num)}</span>
                    <i className="iconfont icon-msg-o" />
                    <span>{NumberFormat(stat.reply_num)}</span>
                    <i className="iconfont icon-z-like" />
                    <span>{NumberFormat(stat.like_num)}</span>
                </div>
            </PostFooter>
        </PostWrapper>
    );
};

export default PostItem;
