import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { 
    changeEnterLoading,
    getResultList
} from './store/actionCreators'
import { 
    Container, 
    ShortcutWrapper,
    Item
} from './style'
import SearchBox from '@/components/common/search-box'
import Scroll from '@/components/common/scroll/index'
import LazyLoad, { forceCheck } from 'react-lazyload'

const Search = (props) => {

    const navigate = useNavigate()
    const { 
        enterLoading,
        resultList
        } = props
    const { 
        changeEnterLoadingDispatch ,
        getResultListDispatch
    } = props
    console.log(resultList,'########');

    const [query,setQuery] = useState('')
    const [show,setShow] = useState(false)

    const searchBack = () => {
        setShow(false);
    }

    const handleQuery = (q) => {
        console.log(q,']]]]]]]]]]]]]]]]');
        setQuery(q)
    }

    useEffect(() =>{
            changeEnterLoadingDispatch(true)
            getResultListDispatch(query)
    },[query])

    const renderResult = () => {
        if(!resultList || !resultList.length) return;
        return (
            <Item>
                {
                    resultList.map(item => {
                        return (
                            <li key={item.id}>
                                <div className="info">
                                    <img src={item.cover} />
                                    <div className="text">
                                        <span className="name">{item.name}</span>
                                        <span className="desc">{item.desc}</span>
                                    </div>
                                    <p>话题</p>
                                </div>
                            </li>
                        )
                    })
                }
            </Item>
        )
    }

    return (
            <Container>
                <div className="search_box_wrapper">
                    <SearchBox 
                        back={searchBack}
                        newQuery={query}
                        handleQuery={handleQuery}
                    >    
                    </SearchBox>
                </div>
                <ShortcutWrapper show={query}>
                    <Scroll onScroll={forceCheck}>
                        <div>
                            {renderResult()}
                        </div>
                    </Scroll>
                </ShortcutWrapper>
            </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        enterLoading: state.search.enterLoading,
        resultList: state.search.resultList
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeEnterLoadingDispatch(data){
            dispatch(changeEnterLoading(data))
        },
        getResultListDispatch(data){
            dispatch(getResultList(data))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search))