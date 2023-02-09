import { Outlet } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'
import PrivacyPolicyModal from 'components/PrivacyPolicyModal'


const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            <PrivacyPolicyModal />
        </>
    )
}

export default Layout