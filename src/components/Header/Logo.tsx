import React from 'react'
// UI
import Logotype from 'UI/Logotype'
// img
import logo from 'assets/logo/g_k_spec_product/logoWhite.svg'
import logoTitle from 'assets/logo/g_k_spec_product/logoTitleWhite.svg'


const Logo: React.FC = () => {

    return (
        <Logotype
            logo={logo}
            logoTitle={logoTitle}
            size={40}
        />
    )
}

export default Logo