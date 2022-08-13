import React, { memo } from 'react';
import ContentItem from './ContentItem/index'
import { TabWrapper, BodyWrapper } from './style'
import { DndContext, TouchSensor, MouseSensor, useSensor, useSensors, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { restrictToVerticalAxis, restrictToWindowEdges } from '@dnd-kit/modifiers'

interface ChosenProps{
    data: any[],
    deleteList: (item: any) => void,
    handleDragEnd: ({ active, over }: {
        active: any;
        over: any;
    }) => void
}

const Chosen: React.FC<ChosenProps> = (props) => {

    const {
        data,
        deleteList,
        handleDragEnd
    } = props
    
    // 捕获触摸传感器
    const touchSensor = useSensor(TouchSensor,{
        activationConstraint:{
            delay: 250,
            tolerance: 10,
        }
    })
    // 捕获鼠标
    const mouseSensor = useSensor(MouseSensor,{
        activationConstraint:{
            delay: 250,
            tolerance: 0,
        }
    })

    const sensors = useSensors(
        touchSensor,
        mouseSensor
    )
    
    // console.log("Chosen",data);
    
    return (
        <BodyWrapper>
        <TabWrapper>
            <header>
                <div className='left'>
                    我的频道
                </div>
                <div className='right'>
                    长按拖动排序
                </div>
            </header>
        </TabWrapper>

        <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
            modifiers={[restrictToVerticalAxis, restrictToWindowEdges]}
        >
        <SortableContext
            items={data.map(item => item.id)}
            strategy={verticalListSortingStrategy}
        >
            {
                data.map((item) =>
                    <ContentItem
                    key={item.id} 
                    deleteList={deleteList} 
                    item={item}
                    {...item}
                />
                )
            }
        </SortableContext>
        </DndContext>

        </BodyWrapper>
    );
}

export default memo(Chosen)