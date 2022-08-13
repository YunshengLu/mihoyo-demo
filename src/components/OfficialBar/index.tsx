import React from 'react';
import { OfficialWrapper } from './style';
import { getGMT } from '@/utils';
import { FileOutline } from 'antd-mobile-icons';
import { OfficialItem } from '@/models';

interface OfficialBarProps {
    official: OfficialItem[];
}

const OfficialBar: React.FC<OfficialBarProps> = props => {
    const { official } = props;

    return (
        <OfficialWrapper>
            <div className="nav">
                <div className="bar_title">
                    <FileOutline className="icon" /> 官方资讯
                </div>
                <a className="link" href="#">
                    全部 &gt;
                </a>
            </div>
            <div className="information">
                {official.length > 0 &&
                    official.map(item => (
                        <div className="item" key={item.post_id}>
                            <div className="message">{item.title}</div>
                            <div className="details">
                                <div className="label">{item.label}</div>
                                <div className="time">{getGMT(item.date)}</div>
                            </div>
                        </div>
                    ))}
            </div>
        </OfficialWrapper>
    );
};

export default OfficialBar;
