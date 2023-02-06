import React from 'react'
// styled
import styled from 'styled-components'

type Props = {}

const Map = (props: Props) => {
    return (
        <MapWrapper>Footer.map</MapWrapper>
    )
}

const MapWrapper = styled.div`
    border: 1px blue solid;
    height: 400px;
    flex: 1;
`
export default Map