import React from 'react';
import { HotTopicsWrapper, TopicItem } from './style';
import { HotTopicsIn } from '@/models';
import { FaceRecognitionOutline } from 'antd-mobile-icons';
import { NumberFormatOne } from '@/utils';

interface HotTopicsProps {
    hotTopics: HotTopicsIn;
}

const HotTopics: React.FC<HotTopicsProps> = props => {
    const { hotTopics } = props;
    return (
        <HotTopicsWrapper>
            <div className="nav">
                <div className="bar_title">
                    <FaceRecognitionOutline className="icon" /> 热门话题
                </div>
                <a href="#" className="link">
                    全部 &gt;
                </a>
            </div>
            <div className="topics">
                {hotTopics.data.map(item => (
                    <TopicItem key={item.topic_id}>
                        <div className="image">
                            <img src={item.image} />
                        </div>
                        <div className="message">
                            <div className="topic_name">{item.topic_name}</div>
                            <div className="post_name">{item.post_name}</div>
                            <div className="count">
                                {NumberFormatOne(item.count.view)} 浏览 /{' '}
                                {NumberFormatOne(item.count.discuss)} 讨论
                            </div>
                        </div>
                    </TopicItem>
                ))}
            </div>
        </HotTopicsWrapper>
    );
};

export default HotTopics;
