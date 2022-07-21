import React from 'react'
import { CSS } from '@dnd-kit/utilities'
import { useSortable } from '@dnd-kit/sortable'
import { 
    Tab,
    TabItem
} from './style'

export default function ContentList(props) {

    const { has_wiki, id, name, app_icon, deleteList, item } = props;
    
    const {
        setNodeRef,
        attributes,
        listeners,
        transition,
        transform,
        isDragging
    } = useSortable({id: id})

    // 长按选中元素拖动时样式
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        opacity: isDragging ? 0.6 : 1,
        dragSelectorExclude: "i"
    }

    return (
        <>
        {
            <Tab
                ref={setNodeRef}
                {...attributes}
                {...listeners}
                style={style}
            >
                    <TabItem>
                        <img src={app_icon} alt="" />
                        <span>{name}</span>
                        {
                            name !== '大别野' && 
                            <i className="iconfont icon-shanjian" onClick={() => deleteList(item)} ></i>
                        }
                        <i className="iconfont icon-shouye" ></i>
                    </TabItem>
            </Tab>
        }
        </>
    )

}
