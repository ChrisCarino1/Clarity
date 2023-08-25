import { useState } from 'react'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import { BsFillChatLeftFill } from 'react-icons/bs'

const Menu = ({ menuActive, setMenuActive, history, setPrompt, setResponse, prompt, response }) => {
    const [menu, setMenu] = useState(true)

    const handleMenu = () => {
        setMenu(!menu)
        setMenuActive(!menuActive)
    }

    return (
    <div className={`fixed ${menu ? 'left-0' : 'left-[-185px]'} top-0 w-[13%] h-full border-r border-r-gray-900 bg-slate-900 transition-left ease-in-out duration-500 text-white col-span-1 z-10`}>
        <div className='flex justify-between items-center bg-slate-800 mt-3 w-full'>
            <h6 className='font-bold my-2 mx-2'>History</h6>
            {
                menu ? <AiOutlineMenuFold onClick={handleMenu} size={20} className='mx-2' /> : <AiOutlineMenuUnfold onClick={handleMenu} size={20} className='mx-2' />
            }
        </div>
        <div className='mt-3'>
            {
                history?.map((item) => (
                    <div className={menu? 'overflow-hidden':'hidden'} onClick={() => {setPrompt(item.prompt); setResponse(item.res)}}>
                        <div className='grid grid-cols-6 gap-2 overflow-hidden my-1 items-center justify-between hover:bg-slate-800 p-3 m-1 rounded-xl'>
                            <BsFillChatLeftFill className='col-span-1' size={20}/>
                            <p className='col-span-5'>{item.prompt.slice(0,25)}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    )
}

export default Menu