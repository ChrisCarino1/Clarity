import { Link } from 'react-router-dom';
import { WiMoonAltWaxingCrescent2 } from 'react-icons/wi'
import Typed from 'react-typed'

const Landing = () => {

    return (
    <main className='bg-slate-900 h-screen text-white flex items-center justify-center'>
        <div className='flex flex-col items-center justify-center w-[600px] text-center'>
            <div className='flex flex-col items-center'>
                <WiMoonAltWaxingCrescent2 size={140}/>
                <h1 className='uppercase md:text-7xl sm:text-6xl font-extrabold p-4 text-blue-400 hover:scale-110 duration-500'>Clarity</h1>
            </div>
            <Typed
            className='md:text-xl sm:text-lg font-semibold mt-6 ease-in-out duration-500'
            strings={['Generate Code Comments with OpenAI..']}
            typeSpeed={60}
            backSpeed={50}
            backDelay={10000}
            loop
            />
            <p className='md:text-lg sm:text-md mt-6 ease-in-out duration-500'>Simplify your code documentation with our</p>
            <p className='md:text-lg sm:text-md font-bold mt-6 ease-in-out duration-500'>AI-powered tool</p>
            <Link to='/Chat' className='mt-9'>
                <button className='bg-accentColor text-white py-2 px-7 rounded-full font-bold md:text-xl sm:text-lg bg-blue-400 hover:bg-blue-500 ease-in-out duration-500'>Get Started</button>
            </Link>
        </div>
    </main>
    )
}

export default Landing