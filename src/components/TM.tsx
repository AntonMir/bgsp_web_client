// ТМ - ТОРГОВАЯ МАРКА 

import React from 'react'
// UI
import Text from 'UI/InfoText'


const TM: React.FC = () => {

    return (
        <Text
            text={process.env.REACT_APP_TM}
            style={{maxWidth: '250px', margin: 0}}
        />
    )
}

export default TM