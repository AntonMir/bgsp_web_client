import React from 'react'
// UI
import InfoBlock from 'UI/InfoBlock'
// img
import clockWhite from 'assets/global/clockWhite.svg' 
import clockBlack from 'assets/global/clockBlack.svg' 


const WorkTime: React.FC = () => {

    return (
        <InfoBlock
            imgWhite={clockWhite}
            imgBlack={clockBlack}
            text='Время работы'
            description='Пн—Пт: 09.00—18.00'
        />
    )
}

export default WorkTime