import React from 'react'
// styled
import styled from 'styled-components'

interface IProps {

}

const Map: React.FC<IProps> = () => {

    return (
        <MapWrapper>
            <MapStyle 
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A8a710f9e9761d510bdc37290f92a621353f5cb4bbe0a71e7d79f4da457b70228&amp;source=constructor" 
            ></MapStyle>
        </MapWrapper>
    )
}

const MapWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    
    @media (max-width: 768px) {
        width: 100%;
    }
`

const MapStyle = styled.iframe`
    width: 95%;
    height: 100%;
    min-height: 400px;
`
export default Map