import React from 'react'
// UI
import InfoBlock from 'UI/InfoBlock'
// img
import emailWhite from 'assets/global/emailWhite.svg' 
import emailBlack from 'assets/global/emailBlack.svg' 

interface IProps {
    style?: React.CSSProperties
}

const Email: React.FC<IProps> = ({style}) => {

    return (

            <InfoBlock
                imgWhite={emailWhite}
                imgBlack={emailBlack}
                text={<a 
                        href={`mailto:${process.env.REACT_APP_EMAIL}`}
                        style={{textDecoration: 'none', margin: 'auto'}}
                    >{process.env.REACT_APP_EMAIL}</a>}
                style={style}
            />
    )
}

export default Email