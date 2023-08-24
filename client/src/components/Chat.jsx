import React, { useState, useCallback } from 'react'
import axios from 'axios'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript';
import { basicSetup, minimalSetup } from '@uiw/codemirror-extensions-basic-setup';
import { githubDark, githubDarkInit } from '@uiw/codemirror-theme-github';
import { BsFillChatLeftFill } from 'react-icons/bs'
// import { AiOutlineMenu } from 'react-icons/ai'

const Chat = (props) => {
    const [prompt, setPrompt] = useState('')
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [history, setHistory] = useState([])

    const addToHistory = (res) => {
        setHistory([...history, {prompt, res}])
    }

    // Create a callback function for onChange
    const onChange = React.useCallback((value, viewUpdate) => {
        setPrompt(value)
    }, []);

    // Send axios post request on submit to get response for prompt
    const handleSubmit = () => {
        axios.post('http://localhost:8080/chat', { prompt })
        .then((res) => {
            setResponse(res.data);
            addToHistory(res.data) // Adds prompt and response to session history
        })
        .catch((err) => {
            console.log(err)
            console.error(err)
        })
    }

    return (
        <div className='grid grid-cols-7 w-full bg-slate-800'>
            <div className='col-span-1 flex flex-col text-white overflow-auto bg-slate-900'>
                <div className='flex flex-row justify-between'>
                    <h6 className='font-bold my-2 bg-slate-700 p-1'>History</h6>
                    {/* <AiOutlineMenu size={20}/> */}
                </div>
                {
                    history?.map((item) => (
                        <div className='overflow-hidden' onClick={() => {setPrompt(item.prompt); setResponse(item.res)}}>
                            <div className='grid grid-cols-6 gap-2 overflow-hidden my-1 items-center justify-between hover:bg-slate-800 p-3 m-1 rounded-xl'>
                                <BsFillChatLeftFill className='col-span-1' size={20}/>
                                <p className='col-span-5'>{item.prompt.slice(0,27)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='text-white grid md:grid-cols-2 sm:grid-cols-1 h-screen my-8 mx-auto gap-16 col-span-6'>
                <div className='md:w-[650px] md:h-[750px] sm:w-[400px] sm:h-[500px] my-5'>
                    <CodeMirror 
                    className='border'
                    placeholder='Paste Code Here...'
                    height='700px'
                    theme={githubDark}
                    value={prompt}
                    extensions={[javascript({ jsx: true })]} 
                    onChange={onChange}
                    basicSetup={{
                        foldGutter: false,
                        dropCursor: false,
                        allowMultipleSelections: false,
                        indentOnInput: false,
                    }}
                    />
                    <button onClick={handleSubmit} className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-5 border-b-4 border-blue-600 hover:border-blue-600 rounded my-3'>Submit</button>
                </div>
                <div className='md:w-[650px] md:h-[750px] sm:w-[400px] sm:h-[500px] my-5'>
                    <CodeMirror 
                    className='border' 
                    placeholder={loading? "loading...":null} // Display loading if loading is true
                    value={response}
                    height='700px'
                    theme={githubDark}
                    extensions={[javascript({ jsx: true })]} 
                    onChange={onChange}
                    basicSetup={{
                        foldGutter: false,
                        dropCursor: false,
                        allowMultipleSelections: false,
                        indentOnInput: false,
                    }}
                    />
                    <button onClick={() => {setPrompt('')}} className='bg-blue-400 hover:bg-red-500 text-white font-bold py-2 px-5 border-b-4 border-blue-600 hover:border-red-600 rounded my-3'>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Chat;