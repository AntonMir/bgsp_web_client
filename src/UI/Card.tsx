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
}


const CustomCard: React.FC<IProps> = ({children, style, className}) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    return (
        <CardStyled style={style} className={`${colorTheme} ${className}`}>
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