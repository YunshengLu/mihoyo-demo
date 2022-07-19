import React, { useState } from 'react';
import { Tab, TabItem, ContentWrapper } from './style';
import { useNavigate, NavLink, useLocation } from 'react-router-dom';
import { Popup } from 'antd-mobile';
import { PicturesOutline, MailOpenOutline, TextOutline, CloseOutline } from 'antd-mobile-icons'

function Footer() {
    const [visible, setVisible] = useState(false);
    const { pathname } = useLocation();
    let pathRes = pathname.split("/");
    let pathName = pathRes[1];
    let pathNames = pathName == 'home'
    || pathName == 'dynamic' || pathName == 'information'
    || pathName == 'mypage';

    return (
        <div>
            <Tab pathHome={pathNames}>
                <NavLink to="/home">
                    <TabItem>
                        <i className="iconfont icon-shouyecopy"></i>
                        <span>首页</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/dynamic">
                    <TabItem>
                        <i className="iconfont icon-dongtai"></i>
                        <span>动态</span>
                    </TabItem>
                </NavLink>

                <>
                    <TabItem
                        onClick={() => {
                            setVisible(true);
                        }}
                    >
                        <div className="input">
                            <i className="iconfont icon-kuaisutianjiamoren"></i>
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
                                    <p>
                                        讨论 分析 攻略 同人文
                                    </p>
                                </span>
                            </a>                            
                            <a href="#">
                                <div>
                                    <PicturesOutline />
                                </div>
                                <span>
                                    图片创作
                                    <p>
                                        绘画 cos 手工 表情包
                                    </p>
                                </span>
                            </a>                            
                            <a href="#">
                                <div>
                                    <p className="beta">beta</p>
                                    <TextOutline />
                                </div>
                                <span>
                                    动态
                                    <p>
                                        分享你的新鲜事
                                    </p>
                                </span>
                            </a>
                            <CloseOutline className="close" onClick={() => setVisible(false)} />
                        </ContentWrapper>
                    </Popup>
                </>

                <NavLink to="/information">
                    <TabItem>
                        <i className="iconfont icon-xiaoxi"></i>
                        <span>消息</span>
                    </TabItem>
                </NavLink>
                <NavLink to="/mypage">
                    <TabItem>
                        <i className="iconfont icon-wode"></i>
                        <span>我的</span>
                    </TabItem>
                </NavLink>
            </Tab>
        </div>
    );
}

export default Footer;
