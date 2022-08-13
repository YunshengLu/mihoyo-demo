import React, { useEffect, useState, useRef } from 'react';
import { HeaderWrapper, StickyWrapper, MySlide } from './style';
import { SearchOutline, UnorderedListOutline } from 'antd-mobile-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import { useScroll } from 'ahooks';
import { NavLink, useNavigate } from 'react-router-dom';

interface HeaderProps {
    gameList: any[];
    channelList: any[];
    discussion: {
        icon: string;
        prompt: string;
    };
}

/**
 *
 * @param {*} props
 * @returns Home顶部Tab导航栏
 */
const HomeDetailNav: React.FC<HeaderProps> = props => {
    const searchRef = useRef(null);
    const scroll = useScroll();

    const { gameList, channelList, discussion } = props;
    const [list, setList] = useState(gameList);
    const [visible, setVisible] = useState(false);
    const [opacity, setOpacity] = useState(0);
    const navigate = useNavigate();

    // 监听屏幕滚动，超出顶部，组件吸顶
    useEffect(() => {
        let pageYOffset: number | undefined = scroll?.top;
        if (scroll && pageYOffset) {
            if (pageYOffset > 125) {
                setOpacity(1);
                if (scroll.top > 250) {
                    setVisible(true);
                } else {
                    setVisible(false);
                }
            } else {
                setOpacity(pageYOffset / 125);
            }
        } else {
            setOpacity(0);
        }
    }, [JSON.stringify(scroll)]);

    useEffect(() => {
        const TrueCheck = channelList.filter(item => item.check == true || item.en_name == 'dby');
        setList(channelList.length ? TrueCheck : gameList);
    }, [gameList, channelList]);

    const swiperList = list.map(item => (
        <SwiperSlide key={item.id}>
            <MySlide opacity={opacity} fontNumber={item.name.length}>
                <NavLink to={`/home/${item.en_name}`}>{item.name}</NavLink>
            </MySlide>
        </SwiperSlide>
    ));
    return (
        <HeaderWrapper ref={searchRef} opacity={opacity}>
            <div className="navBar">
                <div className="search" onClick={() => navigate(`/search`)}>
                    <SearchOutline />
                </div>
                <div className="channels">
                    <Swiper
                        slidesPerView="auto"
                        className="mySwiper"
                        // centeredSlides = {true}
                        // centeredSlidesBounds={true} // 贴边
                        // setWrapperSize={true} // flex调整Wrapper
                        slideToClickedSlide={true}
                        modules={[FreeMode]}
                        freeMode={{
                            enabled: true,
                            momentumBounce: false,
                        }}
                    >
                        {swiperList}
                    </Swiper>
                </div>
                <div className="setChannels" onClick={() => navigate(`/channels`)}>
                    <i className="iconfont icon-caidanzhankai"></i>
                </div>
            </div>
        </HeaderWrapper>
    );
};

export default HomeDetailNav;
