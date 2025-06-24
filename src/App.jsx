import { useState, React } from 'react';
import Header from './Components/Header/Header';
import Movies from './Components/Movies/Movies';
import './App.css'

function App() {
  

  return (
    <div className='app'>
      <Header />
      <main> <Movies /> </main>
    </div>
  )
}

export default App
