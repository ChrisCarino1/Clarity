import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="w-full flex flex-col">
            {/* <Header/> */}
            <main className="flex items-center justify-center bg-slate-900">
                {children}
            </main>
            {/* <Footer/> */}
        </div>
    )
}

export default Layout