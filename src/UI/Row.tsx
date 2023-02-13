import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// antd
import { Row } from 'antd'


interface IProps {
    children?: string | React.ReactNode
    style?: React.CSSProperties
    className?: string
}


const CustomRow: React.FC<IProps> = ({children, style, className}) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    return (
        <Row 
            style={{...style, zIndex: '0', minHeight: '500px'}} 
            justify="center" 
            align="middle" 
            className={`background-${colorTheme} ${className}`}
        >
            {children}
        </Row>
        
    )
}


export default CustomRow