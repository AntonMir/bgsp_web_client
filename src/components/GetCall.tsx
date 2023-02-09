import React from 'react'
// UI
import InfoBlock from 'UI/InfoBlock'
// img
import phoneWhite from 'assets/global/phoneWhite.svg' 
import phoneBlack from 'assets/global/phoneBlack.svg' 
import { message } from 'antd'

interface IProps {
    style?: React.CSSProperties
}

const GetCall: React.FC<IProps> = ({style}) => {

    const getCall = () => {
        console.log('getCall')
        message.info('Звонок заказан')
    }

    return (
        <InfoBlock
            imgWhite={phoneWhite}
            imgBlack={phoneBlack}
            text='&larr; Тех поддержка'
            style={{
                border: `2px solid`, 
                height: '55%', 
                padding: '0 20px',
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

export default GetCall