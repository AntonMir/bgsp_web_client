import React from 'react'
import styled from 'styled-components'


interface IProps {
}

const HomePage: React.FC<IProps> = (props) => {

    
    return (
        <Wrapper>
            Companies
            <br/>
            OurProjects
            <br/>
            OurClients
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px; 
    margin: 50px 0;
`

export default HomePage