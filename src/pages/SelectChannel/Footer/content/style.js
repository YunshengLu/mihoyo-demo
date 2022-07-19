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
    height: 0.6rem;
    font-size: 18px;
    margin-top: 0.2rem;
    margin-left: 5%;
    border-bottom: 1px solid rgba(166, 166, 169, 0.2);

    img {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 8px;
    }

    span {
        font-size: 16px;
        align-self: center;
        margin-top: -0.1rem;
        margin-left: 4%;
    }

    .icon-tianjia {
        position: absolute;
        align-self: center;
        margin-top: -0.1rem;
        right: 6%;
        font-size: 18px;
        opacity: 0.3;
    }
`;
