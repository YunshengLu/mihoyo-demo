import { useState, useEffect } from 'react'
import Header from './Header'
import Content from './Body'
import Footer from './Footer'
import { Modal } from './style'
import { arrayMove } from '@dnd-kit/sortable'
import {
    getGameList,
} from './store/actionCreators'
import {
    affirmChangeGame,
} from '@/pages/Home/store/actionCreators'
import { connect } from 'react-redux'

const SelectChannel = (props) => {
    
    const [list, setList] = useState([]);
    const [loading,setLoading] = useState(false)
    const [change,setChange] = useState(false)

    const {
        gameList
    } = props

    const {
        getGameListDispatch,
        affirmChangeGameDispatch,
    } = props

    // 筛选出已选择和未选择项
    const TrueCheck = list.filter(item => item.has_wiki == true || item.en_name == 'dby');
    const FalseCheck = list.filter(item => item.has_wiki == false && item.en_name !== 'dby');
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

    const affirm = () => {
        affirmChangeGameDispatch(list)
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
    useEffect(() => {
        setList([...gameList]);
    },[gameList])

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
            <Header change={change} affirm={affirm}/>
            <Content data={TrueCheck} 
                deleteList={deleteList} 
                handleDragEnd={handleDragEnd} 
                />
            <Footer data={FalseCheck} 
                choose={choose} 
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
        affirmChangeGameDispatch(data){
            dispatch(affirmChangeGame(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectChannel)