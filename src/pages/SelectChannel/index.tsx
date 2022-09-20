import { useState, useEffect } from 'react'
import Header from './Header'
import Chosen from './Chosen'
import Unchosen from './Unchosen'
import { Modal } from './style'
import { arrayMove } from '@dnd-kit/sortable'
// import {
//     getCannelList,
// } from '@/pages/Home/store/actions'
import { connect } from 'react-redux'
import { rootState } from '@/store'
import { Dispatch } from 'redux'
import { setChannelList } from '@/pages/Home/store/actions'
import { ReducerState } from '@/store/reducers'

interface SelectChannelProps {
    gameList: any[],
    channelList: any[],
    getCannelListDispatch: () => void;
    changeCannelListDispatch: (list: any[]) => void;
}

const SelectChannel: React.FC<SelectChannelProps> = (props) => {

    const [list, setList] = useState<any[]>([]);
    const [loading, setLoading] = useState(false)
    const [change, setChange] = useState(false)

    const {
        gameList,
        channelList
    } = props

    const {
        getCannelListDispatch,
        changeCannelListDispatch,
    } = props

    // 筛选出已选择和未选择项
    const TrueCheck = list.filter(item => item.check == true || item.en_name == 'dby');
    const FalseCheck = list.filter(item => item.check == false && item.en_name !== 'dby');

    // 定时让模态框消失
    const setState = () => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }

    const affirm = () => {
        changeCannelListDispatch(list)
        setChange(false)
    }

    // 选择
    const choose = (item: any) => {
        let idx = list.findIndex(data => item.id === data.id);
        list[idx].check = !list[idx].check;
        let chooseThis = list.splice(idx, 1);
        list.push(...chooseThis);
        setList([...list]);
        setChange(true)
    };

    // 删除已选择项
    const deleteList = (item: any) => {
        let idx = list.findIndex(data => item.id === data.id);
        // 判断已选择项是否小于或等于两个，若是，那么不可删除，弹出提示模态框，若大于两个则执行删除
        if (TrueCheck.length <= 2) {
            setLoading(true);
            setState();
        } else {
            list[idx].check = !list[idx].check;
            setList([...list]);
            setChange(true)
        }
    };

    // 拿取数据
    // useEffect(() => {
    //     // (async () => {
    //     //     let { data } = await select();
    //     //     // console.log(data);
    //     //     setList([...list, ...data]);
    //     // })();
    //     getCannelListDispatch()
    // }, []);
    // console.log('main',gameList);

    // console.log(channelList,'cannel');
    // console.log(gameList,'game');

    useEffect(() => {
        if (channelList.length) {
            setList([...channelList]);
        } else {
            setList([...gameList]);
        }
    }, [channelList])

    // 拖拽后排序
    const handleDragEnd = ({ active, over }: { active: any, over: any }) => {
        if (active.id !== over.id) {
            setList((items) => {
                const oldIndex = items.findIndex(item => item.id === active.id)
                const newIndex = items.findIndex(item => item.id === over.id)
                return arrayMove(items, oldIndex, newIndex)
            })
        }
        setChange(true)
    }

    return (
        <>
            {loading &&
                <Modal>
                    至少选择一个游戏哦~
                </Modal>
            }
            <Header change={change} affirm={affirm} />
            <Chosen
                data={TrueCheck}
                // data={gameList} 
                deleteList={deleteList}
                handleDragEnd={handleDragEnd}
            />
            <Unchosen data={FalseCheck}
                choose={choose}
            />
        </>
    );
}

const mapStateToProps = (state: rootState) => {
    return {
        gameList: state.home.gameList,
        channelList: state.home.channelList,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // getCannelListDispatch(){
        //     dispatch(getCannelList())
        // },
        changeCannelListDispatch(data: any[]) {
            dispatch(setChannelList(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectChannel)