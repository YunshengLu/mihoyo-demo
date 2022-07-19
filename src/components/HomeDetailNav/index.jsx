import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, NavLink, Outlet } from 'react-router-dom'
import {
    Wrapper,
    SelectItem,
    Top
} from './style'
import Swiper from 'swiper'
import { selectGame } from '@/api/utils'
import { useScroll } from 'ahooks'
import classnames from "classnames"

/**
 * 
 * @param {*} props 
 * @returns Home顶部Tab导航栏
 */
const HomeDetailNav = (props) => {

    const { gameList: data } = props
    // console.log(data);
    
    const navigate = useNavigate()

    const [searchHidden, setSearchHidden] = useState(false);
    const [height, setHeight] = useState(0);
    const searchRef = useRef(null)
    const scroll = useScroll()
    // console.log(scroll);

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

    useEffect(() => {
        setTimeout(() => {
            setHeight(searchRef?.current?.getBoundingClientRect().top)// 设置元素距离顶部的高度
        }, 0);
    }, [])

    // 监听屏幕滚动，超出顶部，组件吸顶
    useEffect(() => {
        if(scroll && scroll.top > 0){
            if(!searchHidden && searchRef.current){
                setSearchHidden(true);
                searchRef.current.style.position = 'fixed'
                searchRef.current.style.backgroundColor ='white'
                searchRef.current.style.zIndex = '9999'
                searchRef.current.style.opacity = '0.5'
            }
        }else {
            if(searchHidden && searchRef.current){
                searchRef.current.style = ''
                setSearchHidden(false);
            }
        }

        if(scroll && scroll.top > 100){
            searchRef.current.style.backgroundColor ='rgb(242, 243, 244)'
            searchRef.current.style.opacity = '1'
        }
    }, [JSON.stringify(scroll)])

    const SelectTop = () => {
        return (
            <SelectItem searchHidden={searchHidden}>
                <div className="swiper-container">
                        <div className="swiper-wrapper">
                {
                    data.map((item) => {
                        if(item.has_wiki || item.en_name == 'dby'){
                            return(
                                <div key={item.id} className="swiper-slide">
                                    <NavLink to={`/home/${selectGame(item)}`}>
                                        <span>
                                            {item.name}
                                        </span>
                                    </NavLink>
                                </div>
                            )
                        }
                    })
                }
                    </div>
                </div>
            </SelectItem>
        )
    }

    return (
        <Wrapper>
            <Top ref={searchRef}>
                <span className={classnames('left',{top_color: searchHidden})}>
                    <i className="iconfont icon-sousuo" onClick={() => navigate("/search")}></i>
                </span>
                {SelectTop()}
                <span className={classnames('right',{top_color: searchHidden})}>
                    <i className="iconfont icon-caidanzhankai" onClick={() => navigate("/select")}></i>
                </span>
            </Top>
            <Outlet />
        </Wrapper>
    )
}

export default HomeDetailNav

