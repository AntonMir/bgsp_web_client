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
    size?: string
    onClick?: () => void
    style?: React.CSSProperties
}

const InfoBlock: React.FC<IProps> = ({imgWhite, imgBlack, text, description, size, onClick, style}) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    return (
        <Wrapper style={style} onClick={onClick} size={size} colorTheme={colorTheme} > 
            <Img src={colorTheme === 'dark' ? imgWhite : imgBlack} alt="img" />
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
    height: 100%;
    max-width: ${props => props.size ? props.size + 'px' : '250px'};
    color: ${props => props.colorTheme === 'dark' ? '#fff' : '#000'};
    border: 0 solid ${props => props.colorTheme === 'dark' ? '#fff' : '#000'};
    user-select: none;
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
`
const Img = styled.img`
    height: 40%;
`

export default InfoBlock