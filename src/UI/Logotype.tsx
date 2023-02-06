import React from 'react'
// Redux
import { useAppSelector } from 'hooks/redux.hooks'
// styled
import styled from 'styled-components'

interface IProps {
    style?: React.CSSProperties
    className?: string
    onClick?: () => void
    logoImg?: string
    logoTitle?: string
    logoImgWhite?: string
    logoImgBlack?: string
    logoTitleWhite?: string
    logoTitleBlack?: string
    size?: number
}


const Logotype: React.FC<IProps> = ({ style, className, onClick, logoImg, logoTitle, logoImgWhite, logoImgBlack, logoTitleWhite, logoTitleBlack, size }) => {

    // отслеживаем текущую цветовую тему приложения
    const colorTheme = useAppSelector((state) => state.colorTheme.color)

    return (
        <Logo 
            style={style} 
            colorTheme={colorTheme}
            size={size}
            className={className} 
            onClick={onClick} 
            >
            {/* Если картинки цветные, то у них нет разных вариантов (черная/белая), ставим в единсвтенном варианте */}
            {logoImg || logoTitle ? (
                <>
                    <Image src={logoImg} alt='logo.svg' />
                    <Image src={logoTitle} alt='logo.svg' />
                </>
            ) : (
                <>
                    <Image src={colorTheme === 'dark' ? logoImgWhite : logoImgBlack} alt='logo.svg' />
                    <Image src={colorTheme === 'dark' ? logoTitleWhite : logoTitleBlack} alt='logo.svg' />
                </>
            )}
        </Logo>
    )
}


const Logo = styled.div<any>`
    display: flex;
    flex-direction: column;
    gap: 7px;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    color: ${props => props.colorTheme === 'dark' ? '#fff' : '#000'};
    height: ${props => props.size ? props.size + 'px' : '40px'};
`

const Image = styled.img`
    height: 100%;
`

export default Logotype