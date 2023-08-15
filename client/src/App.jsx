import axios from 'axios'

import {Routes, Route} from 'react-router-dom'

import Chat from './components/Chat'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Chat/>}/>
      </Routes>
    </>
  )
}

export default App
