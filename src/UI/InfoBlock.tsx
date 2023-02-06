import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// styled
import styled from 'styled-components'


interface IProps {
    imgWhite?: string
    imgBlack?: string
    text?: string | React.ReactNode
    description?: string
    width?: string
    onClick?: () => void
    style?: React.CSSProperties
    imgSize?: string
}

const InfoBlock: React.FC<IProps> = ({imgWhite, imgBlack, text, description, width, onClick, style, imgSize}) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    return (
        <Wrapper style={style} onClick={onClick} width={width} colorTheme={colorTheme} > 
            <Img src={colorTheme === 'dark' ? imgWhite : imgBlack} alt="img" imgSize={imgSize}/>
            <Text>
                {text}
                <br/>
                {description}
            </Text>
        </Wrapper>
    )
}

const Wrapper = styled.div<any>`
    display: flex;
    align-items: center;
    gap: 10px;
    max-width: ${props => props.width ? props.width + 'px' : 'auto'};
    color: ${props => props.colorTheme === 'dark' ? '#fff' : '#000'};
    border: 0 solid ${props => props.colorTheme === 'dark' ? '#fff' : '#000'};
    user-select: none;
    width: max-content;
`

const Text = styled.p`
    user-select: auto;
    a {
        text-decoration: none;
        color: inherit;
        :hover {
            text-decoration: underline;
        }
    }

    
    @media (max-width: 1500px) {
        text-align: center;
    }
`
const Img = styled.img<any>`
    height: calc(1vw + ${props => props.imgSize ? props.imgSize + 'px' : '15px'});

    @media (min-width: 1921px) {
        height: 34px;
    }
`

export default InfoBlock