import { WiMoonAltWaxingCrescent2 } from 'react-icons/wi'

const Header = () => {

    return (
        <header className="h-24 bg-slate-900">
            <div className="flex mx-auto px-4 sm:px-6 py-4 items-center justify-between">
                <div className='flex items-center justify-center'>
                    <WiMoonAltWaxingCrescent2 className='text-white' size={60}/>
                    <p className="flex items-center space-x-1mx-2 text-blue-400 text-5xl font-bold">Clarity</p>
                </div>
                <div>
                    <span className='hover:bg-blue-400 text-white font-bold py-2 px-4 hover:border-b-4 hover:border-blue-500 rounded-xl mx-5'>Contact Developer</span>
                    <span className='hover:bg-blue-400 text-white font-bold py-2 px-4 hover:border-b-4 hover:border-blue-500 rounded-xl mx-5'>GitHub</span>
                </div>
            </div>
        </header>
    )
}

export default Header