import styled from 'styled-components';

export const BodyWrapper = styled.div``;

export const TabWrapper = styled.div`
    font-size: .8rem;
    display: flex;

    header {
        width: 100%;
        height: 2.8rem;
        display: flex;
        align-items: center;

        .left {
            width: 50%;
            text-align: left;
            margin-left: 0.5rem;
            font-weight: 600;
        }

        .right {
            width: 50%;
            text-align: right;
            margin-right: 0.5rem;
            font-size: 0.7rem;
            opacity: 0.7;
        }
    }
`;
