import styled from 'styled-components';

export const Tab = styled.ul`
    background: white;
    display: flex;
    flex-direction: column;
`;

export const TabItem = styled.li`
    width: 90%;
    display: flex;
    list-style: none;
    height: 3rem;
    font-size: 18px;
    margin-top: 0.8rem;
    margin-left: 5%;
    border-bottom: 1px solid rgba(166, 166, 169, 0.2);

    img {
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 8px;
    }

    span {
        font-size: 16px;
        align-self: center;
        margin-top: -0.6rem;
        margin-left: 4%;
    }

    .icon-tianjia {
        position: absolute;
        align-self: center;
        margin-top: -0.6rem;
        right: 6%;
        font-size: 18px;
        opacity: 0.3;
    }
`;
