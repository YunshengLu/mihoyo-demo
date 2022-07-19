import styled from 'styled-components'

export const Wrapper = styled.div`
    background-image: url(${props => (props.imageUrl)});
    background-size: cover;
`