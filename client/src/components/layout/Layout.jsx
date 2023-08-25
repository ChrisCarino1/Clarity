import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="w-full flex flex-col">
            {/* <Header/> */}
            <main className="flex bg-slate-900">
                {children}
            </main>
            {/* <Footer/> */}
        </div>
    )
}

export default Layout