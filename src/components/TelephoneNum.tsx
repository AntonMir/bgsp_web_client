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
            text={<a href="tel:88003337837">8-800-333-78-37</a>}
            description='Звонок по России бесплатный'
            width='270'

        />
    )
}

export default TelephoneNum