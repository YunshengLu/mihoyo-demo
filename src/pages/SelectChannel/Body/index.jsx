import React from 'react';
import ContentList from './content'
import { TabWrapper, BodyWrapper } from './style'
import { DndContext, TouchSensor, MouseSensor, useSensor, useSensors, closestCenter } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'
import { restrictToVerticalAxis, restrictToWindowEdges } from '@dnd-kit/modifiers'

export default function Content(props) {

    const { data, deleteList, handleDragEnd } = props
    
    // 捕获触摸传感器
    const touchSensor = useSensor(TouchSensor,{
        activationConstraint:{
            delay: 300,
            tolerance: 10,
        }
    })
    // 捕获鼠标
    const mouseSensor = useSensor(MouseSensor,{
        activationConstraint:{
            delay: 300,
            tolerance: 0,
        }
    })

    const sensors = useSensors(
        touchSensor,
        mouseSensor
    )

    return (
        <BodyWrapper>
        <TabWrapper>
            <header>
                <div className='left'>
                    <p>我的频道</p>
                </div>
                <div className='right'>
                    <p>长按拖动排序</p>
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
                <ContentList key={item.id} 
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
