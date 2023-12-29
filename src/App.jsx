
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import ScoreContextProvider from './context/ScoreContextProvider'

function App() {

  return (
    <>
    <ScoreContextProvider>
    <BrowserRouter>
      <Routes>
        <Route to='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </ScoreContextProvider>
    </>
  )
}

export default App
