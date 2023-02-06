import React from 'react'
// UI
import InfoBlock from 'UI/InfoBlock'
// img
import officeWhite from 'assets/global/officeWhite.svg' 
import officeBlack from 'assets/global/officeBlack.svg' 


const Address: React.FC = () => {

    return (
        <InfoBlock
            imgWhite={officeWhite}
            imgBlack={officeBlack}
            text='Москва, Коломенский проезд, дом 8, корпус 4'
            width='270'
        />
    )
}

export default Address