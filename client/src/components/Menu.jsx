import React, { useEffect } from 'react';
import { WiMoonAltWaxingCrescent2 } from 'react-icons/wi';
import { BsFillChatLeftFill } from 'react-icons/bs';

const Menu = ({ history, setPrompt, setResponse, prompt, response}) => {
    const handleChange = (p, r) => {
        console.log("change")
        setPrompt(p);
        setResponse(r);
    };

    useEffect(() => {
        console.log(history)
    },[])

    return (
        <div className='top-0 h-screen w-48 m-0 p-2 flex flex-col bg-gray-900 text-white shadow-lg'>
            <div className='flex items-center justify-center mb-2'>
                <WiMoonAltWaxingCrescent2 size={40} className="drop-shadow-glow w-[140px]" />
                <h1 className='uppercase font-bold text-3xl text-blue-400 mr-3 mb-1 mt-[1px]'>Clarity</h1>
            </div>
            <hr className="sidebar-hr mb-2" />
            {history?.map((item, index) => (
                <div className='history-item group flex items-center justify-center' key={index} onClick={() => {handleChange(item.prompt, item.response)}}>
                    <BsFillChatLeftFill size="16" className='text-white mr-2' />
                    <p className='mb-1'>{item.prompt.slice(0, 12)}</p>
                    <span className='item-tooltip group-hover:scale-100'>{item.prompt.slice(0, 100)}</span>
            </div>
            ))}
            {history.length !== 0 && <hr className='sidebar-hr mb-2' />}
        </div>
    );
};

export default Menu;

// const HistoryItem = ({ prompt, response }) => (
//     <div className='history-item group flex items-center justify-center'>
//         <BsFillChatLeftFill size="16" className='text-white mr-2' />
//         <p className='mb-1'>{prompt.slice(0, 12)}</p>
//         <span className='item-tooltip group-hover:scale-100'>{prompt.slice(0, 100)}</span>
//     </div>
// );

