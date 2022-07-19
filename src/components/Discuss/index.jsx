import React,{ useState, useRef, useEffect } from 'react'
import {
    DiscussWrapper,
    Content
} from './style'
import { useScroll } from 'ahooks'

/**
 * 
 * @param {*} param0 
 * @returns 讨论区组件
 */
const Discuss = ({discussion}) => {

    let title = discussion.title
    let icon = discussion.icon
    let prompt = discussion.prompt

    const [searchHidden, setSearchHidden] = useState(false);
    const searchRef = useRef(null)
    const scroll = useScroll()
    // console.log(scroll,'########');

        // 监听屏幕滚动，超出顶部，组件吸顶
        useEffect(() => {
            if(scroll && scroll.top > 144){
                if(!searchHidden && searchRef.current){
                    setSearchHidden(true);
                    searchRef.current.style.position = 'fixed'
                    searchRef.current.style.backgroundColor ='white'
                    searchRef.current.style.marginTop = '-2.98rem'
                    searchRef.current.style.zIndex = '9999'
                }
            }else {
                if(searchHidden && searchRef.current){
                    searchRef.current.style = ''
                    setSearchHidden(false);
                }
            }
        }, [JSON.stringify(scroll)])

    return (
        <DiscussWrapper ref={searchRef} searchHidden={searchHidden}>
            <a href="#">
                <img src={icon} alt="" />
                <Content searchHidden={searchHidden}>
                    {
                        !searchHidden &&          
                        <div className='titles'>
                            <div className='title'>
                                {title}
                            </div>
                            <div className='signin'>
                                未签到
                            </div>
                        </div>
                    }
                    <span>
                        {prompt}
                    </span>
                </Content>
                <p>进入讨论区 &gt;</p>
            </a>
        </DiscussWrapper>
    )
}

export default Discuss