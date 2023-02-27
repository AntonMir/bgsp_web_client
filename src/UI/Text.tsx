import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// styled
import styled from 'styled-components'

interface IProps {
    style?: React.CSSProperties
    text?: string | React.ReactNode
    underline?: boolean
    contextOfUse?: string
}

const Text: React.FC<IProps> = ({style, text, underline, contextOfUse}) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    // если нам задают контекст использования, задаем соответствующий цветовой класс иначе задаем стандартный
    const colorThemeClass = contextOfUse ? `${contextOfUse}-${colorTheme}` : colorTheme

    return (
        <TextStyle
            style={style}
            className={colorThemeClass}
            underline={underline}
        >
            {text}
        </TextStyle>
    )
}

const TextStyle = styled.div<any>`
    display: flex;
    justify-content: flex-start;
    font-size: calc(0.12vw + 14px);
    font-weight: 400;
    width: auto;

    :hover {
        text-decoration: ${props => props.underline ? 'underline' : 'none'};
    }
`

export default Text