import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// antd
import { Card } from 'antd'
// styled
import styled from 'styled-components'


interface IProps {
    children?: string | React.ReactNode
    style?: React.CSSProperties
    className?: string
    contextOfUse?: string
}


const CustomCard: React.FC<IProps> = ({children, style, className, contextOfUse}) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    // если нам задают контекст использования, задаем соответствующий цветовой класс иначе задаем стандартный
    const colorThemeClass = contextOfUse ? `${contextOfUse}-${colorTheme}` : colorTheme

    return (
        <CardStyled style={style} className={`${colorThemeClass} ${className}`}>
            {children}
        </CardStyled>        
    )
}

const CardStyled = styled(Card)`
    border: 1px solid;
    min-width: 25%;

    @media (max-width: 450px) {
        min-width: 100%;
    }
`


export default CustomCard