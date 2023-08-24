// Import axios library to make API calls
import axios from 'axios';

// Import react-router-dom library to create routes
import { Routes, Route } from 'react-router-dom'

// Import components
import Layout from './components/layout/Layout';
import Chat from './components/Chat';
import Landing from './components/Landing'

function App() {

  return (
    <>
      {/* Create routes for Landing and Chat components */}
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/chat' element={<Layout><Chat/></Layout>}/>
      </Routes>
    </>
  )
}

export default App