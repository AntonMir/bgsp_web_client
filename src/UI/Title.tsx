import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// styled
import styled from 'styled-components'

interface IProps {
    style?: React.CSSProperties
    text?: string
    align?: string 
    contextOfUse?: string
}

const Title: React.FC<IProps> = ({style, text, align, contextOfUse}) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    // если нам задают контекст использования, задаем соответствующий цветовой класс иначе задаем стандартный
    const colorThemeClass = contextOfUse ? `${contextOfUse}-${colorTheme}` : colorTheme

    return (
        <TitleStyle
            style={style}
            className={colorThemeClass}
            align={align}
        >
            {text}
        </TitleStyle>
    )
}

const TitleStyle = styled.h1<any>`
    text-align: ${props => props.align || 'center'} ;
    font-size: calc(0.7vw + 18px);
    margin: 0 0 20px 0;
    font-weight: 500;
`

export default Title