import React from 'react'
import { 
    Tab,
    TabItem
} from './style'

export default function ContentList(props) {

    const { data , choose } = props

    return (
        <Tab>
            {
                data.map((item) => 
                    item.has_wiki == false &&
                    <TabItem key={item.id}>
                        <img src={item.app_icon} alt="" />
                        <span>{item.name}</span>
                        <i className="iconfont icon-tianjia" onClick={() => choose(item)}></i>
                    </TabItem>
                )
            }
        </Tab>
    )
}