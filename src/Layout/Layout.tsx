import { Outlet } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'


const Layout: React.FC = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout