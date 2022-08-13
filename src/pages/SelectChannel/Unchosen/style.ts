import styled from 'styled-components';

export const UnchosenWrapper = styled.div``;

export const TabWrapper = styled.div`
    height: 2.8rem;
    line-height: 2.8rem;
    font-size: .8rem;
    text-align: left;
    .left {
        margin-left: 0.5rem;
        font-weight: 600;
    }
`;

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
    font-size: .9rem;
    margin-top: 0.8rem;
    margin-left: 5%;
    border-bottom: 1px solid rgba(166, 166, 169, 0.2);

    img {
        width: 2.3rem;
        height: 2.3rem;
        border-radius: .4rem;
    }

    span {
        font-size: .8rem;
        align-self: center;
        margin-top: -0.6rem;
        margin-left: 4%;
    }

    .icon-tianjia {
        position: absolute;
        align-self: center;
        margin-top: -0.6rem;
        right: 6%;
        font-size: .9rem;
        opacity: 0.3;
    }
`;

