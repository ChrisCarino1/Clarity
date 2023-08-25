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
            setHistory([...history, {prompt, res}]) // Adds prompt and response to session history
        })
        .catch((err) => {
            console.log(err)
            console.error(err)
        })
    }

    return (
        <div className={`w-full bg-slate-800 grid grid-cols-8`}>
            <Menu menuActive={menuActive} setMenuActive={setMenuActive} history = {history} setPrompt={setPrompt} prompt={prompt} setResponse={setResponse} response={response}/>
            <div className={`text-white grid md:grid-cols-2 sm:grid-cols-1 h-screen my-8 mx-auto gap-8 ${menuActive? 'col-start-2 col-end-9':'col-start-1 col-end-9'}`}>
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