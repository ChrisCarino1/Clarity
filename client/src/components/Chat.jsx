import { useState } from 'react'

const Chat = (props) => {
    const [prompt, setPrompt] = useState("")
    const [response, setResponse] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        axios.post("http://localhost:8080/chat", { prompt })
        .then((res) => {
            console.log("success")
            setResponse(res.data);
        })
        .catch((err) => {
            console.log(err)
            console.error(err)
        })
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1 className="text-2xl">test</h1>
                <label className="text-2xl">Say something</label>
                <input type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)}/>
                <button type="submit">Submit</button>
            </form>
            <p>{response}</p>
        </div>
    )
}

export default Chat;
