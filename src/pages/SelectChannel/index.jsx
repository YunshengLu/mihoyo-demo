import { useState, useEffect } from 'react'
import Header from './Header'
import Content from './Body'
import Footer from './Footer'
import { Modal } from './style'
import { arrayMove } from '@dnd-kit/sortable'
import {
    getGameList,
} from './store/actionCreators'

const SelectChannel = (props) => {
    
    // const [list, setList] = useState([
    //     {
    //         id: 7,
    //         title: '大别野',
    //         img: 'https://bbs.mihoyo.com/_nuxt/img/game-dby.7b16fa8.jpg',
    //         checked: true,
    //     },
    // ]);
    const [loading,setLoading] = useState(false)
    const [change,setChange] = useState(false)

    const {
        gameList : list
    } = props

    const {
        getGameListDispatch
    } = props

    // 筛选出已选择和未选择项
    const TrueCheck = list.filter(item => item.has_wiki == true);
    const FalseCheck = list.filter(item => item.has_wiki == false);

    // 提示模态框
    const modal=()=>{
        return(
            loading && 
            <Modal>
                <span>至少选择一个游戏哦~</span>
            </Modal>
        )
        }
    // 定时让模态框消失
    const setState = () =>{
        setTimeout(()=>{
            setLoading(false)
        },2000)
    }

    // 选择
    const choose = item => {
        // console.log('--------');
        let idx = list.findIndex(data => item.id === data.id);
        // console.log(idx);
        list[idx].has_wiki = !list[idx].has_wiki;
        setList([...list]);
        setChange(true)
    };

    // 删除已选择项
    const deleteList = item => {
        let idx = list.findIndex(data => item.id === data.id);
        // 判断已选择项是否小于或等于两个，若是，那么不可删除，弹出提示模态框，若大于两个则执行删除
        if(TrueCheck.length <= 2){
            setLoading(true);
            setState();
        }else{
            list[idx].has_wiki = !list[idx].has_wiki;
            setList([...list]);
            setChange(true)
        }
    };

    // 拿取数据
    useEffect(() => {
        // (async () => {
        //     let { data } = await select();
        //     // console.log(data);
        //     setList([...list, ...data]);
        // })();
        getGameListDispatch()
    }, []);

    // 拖拽后排序
    const handleDragEnd = ({active, over}) => {
        if(active.id !== over.id){
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
            {modal()}
            <Header change={change} />
            <Content data={list} 
                deleteList={deleteList} 
                handleDragEnd={handleDragEnd} 
                />
            <Footer data={list} 
                choose={choose} 
                FalseCheck={FalseCheck} 
                />
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        gameList: state.select.gameList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getGameListDispatch(){
            dispatch(getGameList())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectChannel)