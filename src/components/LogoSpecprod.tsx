import React from 'react'
// UI
import Logotype from 'UI/Logotype'
// img
import logoImgWhite from 'assets/logo/g_k_spec_product/logoWhite.svg'
import logoImgBlack from 'assets/logo/g_k_spec_product/logoBlack.svg'
import logoTitleWhite from 'assets/logo/g_k_spec_product/logoTitleWhite.svg'
import logoTitleBlack from 'assets/logo/g_k_spec_product/logoTitleBlack.svg'


const Logo: React.FC = () => {

    return (
        <Logotype
            logoImgWhite={logoImgWhite}
            logoImgBlack={logoImgBlack}
            logoTitleWhite={logoTitleWhite}
            logoTitleBlack={logoTitleBlack}
            size={50}
            style={{padding: '0 0 30px 0'}}
        />
    )
}

export default Logo