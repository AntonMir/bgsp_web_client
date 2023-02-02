import React from 'react'
import styled from 'styled-components'


interface IProps {
}

const HomePage: React.FC<IProps> = (props) => {

    
    return (
        <Wrapper>HomePage</Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 100px);
    font-size: 50px; 
`

export default HomePage