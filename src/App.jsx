import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Data from './components/Data'

function App() {
  const [page, setPage] = useState('home')

  return (
    <>
      <Header setPage={setPage} />

      {page === 'home' && <Body />}
      {page === 'data' && <Data />}

      <Footer />
    </>
  )
}

export default App