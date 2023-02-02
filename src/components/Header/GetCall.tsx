import React from 'react'
// UI
import InfoBlock from 'UI/InfoBlock'
// img
import phoneWhite from 'assets/global/phoneWhite.svg' 
import phoneBlack from 'assets/global/phoneBlack.svg' 
import { message } from 'antd'


const GetCall: React.FC = () => {

    const getCall = () => {
        console.log('getCall')
        message.info('Звонок заказан')
    }

    return (
        <InfoBlock
            imgWhite={phoneWhite}
            imgBlack={phoneBlack}
            text='&larr; Заказать звонок'
            style={{
                border: `2px solid`, 
                height: '40%', 
                padding: '0 20px',
                borderRadius: '5px',
                cursor: 'pointer'
            }}
            onClick={getCall}
        />
    )
}

export default GetCall