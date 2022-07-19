import styled from 'styled-components';
import style from '@/assets/global-style';

export const SearchBoxWrapper = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 0 0.3rem;
    padding-right: 1rem;
    height: 2rem;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    .search {
        display: flex;
        align-items: center;
        height: 1.2rem;
        width: 15rem;
        margin-left: 0.5rem;
        background: white;
        border-radius: 0.2rem;
        .icon-sousuo {
            font-size: 0.8rem;
            font-weight: bold;
            margin-left: 0.5rem;
            opacity: 0.5;
        }
        .box {
            margin-left: 0.2rem;
            background: white;
            outline: none;
            border: none;
            &::placeholder {
                color: rgba(0, 0, 0, 0.5);
            }
        }
    }
    .delete {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 14rem;
        height: 0.5rem;
        width: 0.5rem;
        font-size: 0.6rem;
        color: black;
        opacity: 0.5;
    }
    .cancel {
        width: auto;
        white-space: nowrap;
        font-size: 0.7rem;
        margin-left: 1rem;
    }
`;
