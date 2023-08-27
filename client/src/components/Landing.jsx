import { Link } from 'react-router-dom';
import { WiMoonAltWaxingCrescent2 } from 'react-icons/wi'
import Typed from 'react-typed'

const Landing = () => {

    return (
<main className="bg-gradient-to-br from-slate-900 to-gray-800 h-screen text-white flex items-center justify-center">
    <div className="flex flex-col items-center justify-center max-w-3xl mx-auto text-center mt-[-6rem]">
        <div className="flex flex-col md:flex-row justify-center items-center">
            <WiMoonAltWaxingCrescent2 size={140} className="drop-shadow-glow md:ml-[-1rem] w-[140px]" />
            <h1 className="uppercase md:text-9xl text-8xl font-extrabold p-4 text-blue-400 hover:scale-105 transition-transform duration-300">
                Clarity
            </h1>
        </div>
        <p className="md:text-lg text-md mt-4">Simplify your code documentation with our AI-powered tool</p>
        <Link to="/Chat" className="mt-9">
            <button className="bg-blue-400 hover:bg-blue-600 text-white py-2 px-7 rounded-full font-bold md:text-xl sm:text-lg transition-background duration-300">
                Get Started
            </button>
        </Link>
    </div>
</main>
    )
}

export default Landing