import styled from 'styled-components';

export const Tab = styled.div`
    height: 3rem;
    line-height: 3rem;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(166, 166, 169, 0.2);
    a {
        color: black;
        display: block;
        text-decoration: none;
    }
    .left {
        position: absolute;
        width: 10%;
        left: 0;
        .icon-fanhui {
            font-size: 28px;
            font-weight: 600;
        }
    }
    .right {
        position: absolute;
        width: 10%;
        right: 0;
        font-size: 15px;
        display: flex;
        align-items: center;
        vertical-align: top;
    }
    .content {
        font-weight: 600;
    }
    .noChange {
        opacity: 0.4;
    }
    .changeItem {
        color: #0b8cf1;
        opacity: 0.8;
    }
`;
