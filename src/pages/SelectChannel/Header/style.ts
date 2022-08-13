import styled from 'styled-components';

export const Tab = styled.div`
    height: 3rem;
    line-height: 3rem;
    padding: 0 .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(166, 166, 169, 0.2);
    a {
        color: black;
        display: block;
        text-decoration: none;
    }
    .left {
        width: 10%;
        text-align: center;
        .icon-fanhui {
            font-size: 1rem;
            font-weight: 600;
        }
    }
    .right {
        width: 10%;
        font-size: 0.75rem;
        text-align: center;
    }
    .content {
        font-weight: 600;
        font-size: .9rem;
    }
    .noChange {
        opacity: 0.5;
    }
    .changeItem {
        color: #0b8cf1;
        opacity: 0.8;
    }
`;
