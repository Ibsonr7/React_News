import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { NewsBoard } from './components/NewsBoard'
import Footer from './components/Footer';

function App() {

  const [category, setCategory] = useState('general');

  return (
    <>
      <Navbar setCategory={setCategory} />
      <NewsBoard category={category} />
      <Footer />
    </>
  )
}

export default App
