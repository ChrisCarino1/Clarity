import { useState, useEffect } from 'react'
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'
import { BsPlus, BsFillLightningFill, BsGearFill, BsFillChatLeftFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';
import { WiMoonAltWaxingCrescent2 } from 'react-icons/wi'

const Menu = ({ history, setPrompt, setResponse, prompt, response }) => {

    const handleChange = (prompt, response) => {
        console.log(prompt)
        console.log(response)
        setPrompt(prompt)
        setResponse(response)
    }

    return (
    // <div className={`fixed ${menu ? 'left-0' : 'left-[-185px]'} top-0 w-[13%] h-full border-r border-r-gray-900 bg-slate-900 transition-left ease-in-out duration-500 text-white col-span-1 z-10`}>
    //     <div className='flex justify-between items-center bg-slate-800 mt-3 w-full'>
    //         <h6 className='font-bold my-2 mx-2'>History</h6>
    //         {
    //             menu ? <AiOutlineMenuFold onClick={handleMenu} size={20} className='mx-2' /> : <AiOutlineMenuUnfold onClick={handleMenu} size={20} className='mx-2' />
    //         }
    //     </div>
    //     <div className='mt-3'>
    //         {
    //             history?.map((item) => (
    //                 <div className={menu? 'overflow-hidden':'hidden'} onClick={() => {setPrompt(item.prompt); setResponse(item.res)}}>
    //                     <div className='grid grid-cols-6 gap-2 overflow-hidden my-1 items-center justify-between hover:bg-slate-800 p-3 m-1 rounded-xl'>
    //                         <BsFillChatLeftFill className='col-span-1' size={20}/>
    //                         <p className='col-span-5'>{item.prompt.slice(0,25)}</p>
    //                     </div>
    //                 </div>
    //             ))
    //         }
    //     </div>
    // </div>
        <div className='top-0 h-screen w-48 m-0 p-2
        flex flex-col
        bg-gray-900 text-white shadow-lg'>

            <div className='flex items-center justify-center mb-2'>
                <WiMoonAltWaxingCrescent2 size={40} className="drop-shadow-glow w-[140px]" />
                <h1 className='uppercase font-bold text-3xl text-blue-400 mr-3 mb-1 mt-[1px]'>Clarity</h1>
            </div>

            <hr className="sidebar-hr mb-2" />
            {
                history?.map((item) => (
                    <HistoryItem onClick={handleChange(prompt, response)} prompt={item.prompt} response={item.response}/>
                ))
            }
            {
                !history.length == 0? <hr className='sidebar-hr mb-2' />:null
            }
        </div>
    )
}

export default Menu

const HistoryItem = ({ prompt, response ,text = 'tooltip' }) => (
    <div className='history-item group flex items-center justify-center'>
        {<BsFillChatLeftFill size="16" className='text-white mr-2'/>}
        <p className='mb-1'>{prompt.slice(0,12)}</p>
        <span className='item-tooltip group-hover:scale-100'>
            {prompt.slice(0,100)}
        </span>
    </div>
    )

const Divider = () => <hr className="sidebar-hr" />;