import React, { useState, useEffect, useRef, useMemo, memo } from 'react';
import { debounce } from '@/api/utils';
import { useNavigate } from 'react-router-dom'
import { SearchBoxWrapper } from "./style"
import { CloseCircleOutline } from 'antd-mobile-icons'

const SearchBox = (props) => {

    const navigate = useNavigate()
    const queryRef = useRef();
    const { newQuery } = props;
    const { handleQuery } = props;
    const [query,setQuery] = useState('');

    let handleQueryDebounce = useMemo(() => {
        return debounce(handleQuery, 100)
    },[handleQuery])

    useEffect(() => {
        // 挂载后
        queryRef.current.focus();
    },[])

    useEffect(() => {
        handleQueryDebounce(query);
    },[query])

    useEffect(() => {
        let curQuery = query;
        if(newQuery !== query){
            curQuery = newQuery;
            queryRef.current.value = newQuery;
        }
        setQuery(curQuery)
    },[newQuery])

    const clearQuery = (e) => {
        let val = e.currentTarget.value
        queryRef.current.value = '';
        queryRef.current.focus();
        setQuery(val);
    }

    const handleChange = (e) => {
        let val = e.currentTarget.value
        setQuery(val)
    }

    const displayStyle = query ? {display: 'block'} : {display: 'none'};

    return (
        <SearchBoxWrapper>
            <div className="search">
                <i className="iconfont icon-sousuo"></i>
                <input type="text" 
                    className="box" 
                    placeholder="搜索话题、人物、文章" 
                    ref={queryRef}
                    onChange={handleChange}
                />
            </div>
            <div
                className="delete" 
                style={displayStyle}
                onClick={clearQuery}
            ><CloseCircleOutline /></div>
            <div 
                // onClick={() => back()}
                onClick={() => navigate(-1)}
                className="cancel"
            >取消</div>
        </SearchBoxWrapper>
    )
}

export default memo(SearchBox)