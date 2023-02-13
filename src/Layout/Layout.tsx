import { Outlet } from 'react-router-dom'
import Header from 'components/Header'
import Footer from 'components/Footer'
import Background from 'UI/Background'


const Layout: React.FC = () => {
    return (
        <>
            <Header />

            <Background>
                <Outlet />
            </Background>

            <Footer />
        </>
    )
}


export default Layout