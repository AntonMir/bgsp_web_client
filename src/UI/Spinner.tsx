import React from 'react'
// img
import spinner from 'assets/global/spinner.svg'
// styled
import styled from 'styled-components'

type Props = {}

const Spinner = (props: Props) => {
  return (
    <SpinnerStyle>
        <img src={spinner} alt="spinner" />
    </SpinnerStyle>
  )
}

const SpinnerStyle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    padding: 20px 0;
    opacity: 0.9;
    > img {
        max-width: calc(5vw + 35px);
        height: auto;
    }
`

export default Spinner