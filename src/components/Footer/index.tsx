import React, { useState } from 'react';
import { Popup } from 'antd-mobile';
import { NavLink, useLocation } from 'react-router-dom';
import { PicturesOutline, MailOpenOutline, TextOutline, CloseOutline } from 'antd-mobile-icons';
import { FooterWrapper, ContentWrapper } from './style';

const Footer = () => {
    const { pathname } = useLocation();
    const [visible, setVisible] = useState(false);
    if (pathname == '/search' || pathname == '/channels') return null;

    return (
        <FooterWrapper>
            <NavLink to="/home">
                <div className="tab-item">
                    <i className="iconfont icon-shouyecopy" id="c"></i>
                    <span>首页</span>
                </div>
            </NavLink>
            <NavLink to="/dynamic">
                <div className="tab-item">
                    <i className="iconfont icon-dongtai"></i>
                    <span>动态</span>
                </div>
            </NavLink>

            <>
                <div
                    className="tab-item"
                    onClick={() => {
                        setVisible(true);
                    }}
                >
                    <div className="input">
                        <i className="iconfont icon-kuaisutianjiamoren"></i>
                    </div>
                </div>
                <Popup
                    visible={visible}
                    onMaskClick={() => {
                        setVisible(false);
                    }}
                    bodyStyle={{
                        borderTopLeftRadius: '0.5rem',
                        borderTopRightRadius: '0.5rem',
                        height: '15rem',
                    }}
                >
                    <ContentWrapper>
                        <a href="#">
                            <div>
                                <MailOpenOutline />
                            </div>
                            <span>
                                帖子
                                <p>讨论 分析 攻略 同人文</p>
                            </span>
                        </a>
                        <a href="#">
                            <div>
                                <PicturesOutline />
                            </div>
                            <span>
                                图片创作
                                <p>绘画 cos 手工 表情包</p>
                            </span>
                        </a>
                        <a href="#">
                            <div>
                                <p className="beta">beta</p>
                                <TextOutline />
                            </div>
                            <span>
                                动态
                                <p>分享你的新鲜事</p>
                            </span>
                        </a>
                        <CloseOutline className="close" onClick={() => setVisible(false)} />
                    </ContentWrapper>
                </Popup>
            </>

            <NavLink to="/message">
                <div className="tab-item">
                    <i className="iconfont icon-xiaoxi"></i>
                    <span>消息</span>
                </div>
            </NavLink>
            <NavLink to="/mypage">
                <div className="tab-item">
                    <i className="iconfont icon-wode"></i>
                    <span>我的</span>
                </div>
            </NavLink>
        </FooterWrapper>
    );
};

export default Footer;
