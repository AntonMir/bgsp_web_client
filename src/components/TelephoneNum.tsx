import React from 'react'
// UI
import InfoBlock from 'UI/InfoBlock'
// img
import smartPhoneWhite from 'assets/global/smartPhoneWhite.svg' 
import smartPhoneBlack from 'assets/global/smartPhoneBlack.svg' 


const TelephoneNum: React.FC = () => {

    return (
        <InfoBlock
            imgWhite={smartPhoneWhite}
            imgBlack={smartPhoneBlack}
            text={<a href={`tel:${process.env.REACT_APP_PHONE}`}>{process.env.REACT_APP_PHONE}</a>}
            description='Звонок по России бесплатный'
            width='270'

        />
    )
}

export default TelephoneNum