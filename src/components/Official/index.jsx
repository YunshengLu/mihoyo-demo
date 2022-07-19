import React from 'react'
import propTypes from 'prop-types'
import { 
    Wrapper,
    Item,
} from './style'
import {     
    getGMT, 
} from '@/api/utils'

/**
 * 
 * @param {*} param0 
 * @returns 资讯栏组件
 */
const Official = ({officialList}) => {

    return (
        <Wrapper>
            <a href="#">
                <i className="iconfont icon-zixun"></i>
                <p>官方资讯</p>
                <div className="all">
                    <span>全部 </span>
                    <i className="iconfont icon-xiangyou"></i>
                </div>
            </a>
            {
                officialList && officialList.length ?
                officialList.map((item) =>
                    <Item key={item.post_id}>
                        <a href="#">
                            <div className="title">
                                {item.title}
                            </div>
                            <div className="footer">
                                <div className="label">
                                    {item.label}
                                </div>
                                <div className="date">
                                    {getGMT(item.date)}
                                </div>
                            </div>
                        </a>
                    </Item>
                ) : null
            }
        </Wrapper>
    )
}

export default Official

// Official.propTypes = {
//     official:propTypes.array.isRequired
// }
