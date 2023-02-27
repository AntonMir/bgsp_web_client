import React from 'react'
// UI
import InfoBlock from 'UI/InfoBlock'
// img
import phoneWhite from 'assets/global/phoneWhite.svg' 
import phoneBlack from 'assets/global/phoneBlack.svg' 
import { message } from 'antd'
// Redux
import { useAppDispatch, useAppSelector } from 'hooks/redux.hooks'
import { close, open } from 'store/techSuppModal/techSuppModal.actions'


interface IProps {
    style?: React.CSSProperties
}

const TechSuppBtn: React.FC<IProps> = ({style}) => {

    const dispatch = useAppDispatch()

    const getCall = () => {
        dispatch({type: open.type})
    }

    return (
        <InfoBlock
            imgWhite={phoneWhite}
            imgBlack={phoneBlack}
            text='&larr; Тех поддержка'
            style={{
                border: `2px solid`, 
                height: '55%', 
                padding: '0 20px 3px',
                margin: ' 7px 0',
                borderRadius: '5px',
                cursor: 'pointer',
                ...style
            }}
            imgSize='5'
            onClick={getCall}
        />
    )
}

export default TechSuppBtn