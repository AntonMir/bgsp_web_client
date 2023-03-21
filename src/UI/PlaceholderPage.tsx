import React from 'react'
import styled from 'styled-components'

type Props = {}

const Placeholder = (props: Props) => {
  return (
    <Wrapper>Страница находится в разработке</Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  font-size: calc(2vw + 10px);
`



export default Placeholder