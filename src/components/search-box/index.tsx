import React, { useEffect, useState, memo, useRef, useMemo } from 'react';
import styled from 'styled-components';
// import style from '@/assets/global-style'
import { debounce } from '@/utils';
import { SearchOutline, CloseOutline } from 'antd-mobile-icons';
import { SearchBoxWrapper } from './style';

interface SearchBoxProps {
    newQuery: string;
    children?: React.ReactNode;
    linkTo: (newQuery: string) => void;
    setShow: (show: boolean) => void;
    back: () => void;
    handleQuery: (q: any) => void;
}

const SearchBox: React.FC<SearchBoxProps> = props => {
    // 解构父组件 props 时，分两部分：读 props、方法
    // newQuery 与 api 交流
    // 该组件 query 做 监听 防抖 好交给 newQuery
    const { newQuery } = props;
    const { handleQuery, back, linkTo, setShow } = props;
    // useRef() 为下方组件 ref={queryRef} 提供挂载点
    const queryRef = useRef<any>();
    const [query, setQuery] = useState('');
    // 控制 删除文本标志 是否显示
    const displayStyle = query ? { display: 'block' } : { display: 'none' };
    // 父组件 传过来的函数 封装一下
    // useMemo 可以缓存 上一次函数计算的结果
    let handleQueryDebounce = useMemo(() => {
        return debounce(handleQuery, 500);
        // 防抖后 返回 给父组件方法 handleQuery
    }, [handleQuery]);

    const clearQuery = () => {
        setQuery('');
        queryRef.current.value = '';
        queryRef.current.focus();
    };
    const handleChange = (e: { currentTarget: { value: string } }) => {
        let val = e.currentTarget.value;
        setQuery(val);
        // 改变 query 转 -》useEffect监听query改变
    };
    // mount 挂载后 聚焦
    useEffect(() => {
        queryRef.current.focus();
    }, []); // mount 挂载后，生命周期
    // 使用 useEffect 更新
    useEffect(() => {
        // console.log(queryRef)
        // 监听到 query 改变后，传给useMemo保护的防抖函数
        handleQueryDebounce(query);
    }, [query]); // query 更新
    useEffect(() => {
        // mount||newQuery
        let curQuery = query;
        if (newQuery !== query) {
            curQuery = newQuery;
            queryRef.current.value = newQuery;
        }
        setQuery(curQuery);
    }, [newQuery]);
    // newQuery 选中推荐输入名词后传入

    return (
        <SearchBoxWrapper>
            <div className="m-search-search-bar">
                <div className="input-area">
                    <SearchOutline className="search" />
                    &nbsp;
                    <input
                        type="text"
                        placeholder="谁能在我的世界里跳得最远？"
                        ref={queryRef}
                        onChange={handleChange}
                        onKeyDown={e => {
                            if (e.key === 'Enter') {
                                console.log('Go' + newQuery);
                                linkTo(newQuery);
                            }
                        }}
                        onFocus={() => {
                            setShow(true);
                        }}
                    />
                    <CloseOutline className="close" style={displayStyle} onClick={clearQuery} />
                </div>
                <span className="cancel" onClick={() => back()}>
                    取消
                </span>
            </div>
        </SearchBoxWrapper>
    );
};

export default memo(SearchBox);
