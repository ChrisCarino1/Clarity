import React, { useState, useCallback } from 'react'
import axios from 'axios'
import CodeMirror from '@uiw/react-codemirror'
import { javascript } from '@codemirror/lang-javascript';
import { basicSetup, minimalSetup } from '@uiw/codemirror-extensions-basic-setup';
import { githubDark, githubDarkInit } from '@uiw/codemirror-theme-github';
import Menu from './Menu'

const Chat = (props) => {
    const [prompt, setPrompt] = useState('')
    const [response, setResponse] = useState('')
    const [loading, setLoading] = useState(false)
    const [menuActive, setMenuActive] = useState(true)
    const [history, setHistory] = useState([])

    // Create a callback function for onChange
    const onChange = React.useCallback((value, viewUpdate) => {
        setPrompt(value)
    }, []);

    // Send axios post request on submit to get response for prompt
    const handleSubmit = () => {
        axios.post('http://localhost:8080/chat', { prompt })
        .then((res) => {
            setResponse(res.data);
            const response = res.data
            setHistory([...history, {prompt, response}]) // Adds prompt and response to session history
        })
        .catch((err) => {
            console.log(err)
            console.error(err)
        })
    }

    return (
        <div className='flex w-full bg-gray-800 h-full'>
            <Menu history={history} response={response} setResponse={setResponse} prompt={prompt} setPrompt={setPrompt}/>
            <div className='flex flex-col md:flex-row justify-center items-center w-full gap-5'>
                <div className='w-[400px] md:w-[600px] mt-5 md:mt-0'>
                    <CodeMirror 
                        className='border border-gray-700 shadow-xl'
                        placeholder='Paste Code Here...'
                        height='630px'
                        theme={githubDark}
                        value={prompt}
                        extensions={[javascript({ jsx: true })]} 
                        onChange={onChange}
                        basicSetup={{
                            foldGutter: false,
                            dropCursor: false,
                            allowMultipleSelections: false,
                            indentOnInput: true,
                        }}
                        />
                        <button onClick={handleSubmit} className='bg-blue-400 hover:bg-blue-500
                                                                font-bold text-white  
                                                                py-2 px-5 my-3
                                                                w-full
                                                                border-b-4 border-blue-500 hover:border-blue-600 rounded shadow-xl'>Submit</button>
                </div>
                <div className='w-[400px] md:w-[600px]'>
                    <CodeMirror 
                        className='border border-gray-700 shadow-xl' 
                        placeholder={loading? "loading...":null}
                        value={response}
                        height='630px'
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
                        <button onClick={() => {setPrompt('')}} className='bg-blue-400 hover:bg-red-500
                                                                        text-white font-bold 
                                                                        py-2 px-5 my-3
                                                                        w-full
                                                                        border-b-4 border-blue-500 hover:border-red-600 rounded shadow-xl'>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default Chat;