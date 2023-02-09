import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// styled
import styled from 'styled-components'

interface IProps {
    style?: React.CSSProperties
    text?: string
}

const Title: React.FC<IProps> = ({style, text}) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    return (
        <TitleStyle
            style={style}
            className={colorTheme}
        >
            {text}
        </TitleStyle>
    )
}

const TitleStyle = styled.h1<any>`
    font-size: calc(1.4vw + 14px);
    margin: 0 0 30px 0;
    font-weight: 500;
`

export default Title