import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// styled
import styled from 'styled-components'

interface IProps {
    style?: React.CSSProperties
    text?: string | React.ReactNode
}

const Text: React.FC<IProps> = ({style, text}) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    return (
        <TextStyle
            style={style}
            className={colorTheme}
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
`

export default Text