import React from 'react'

import './App.css'
import Footer from './components/Footer'
import Logos from './components/Logos'

function App () {
  return (
    <div className='App'>
      <header className='Main sectionr'>
        <p>Welcome to my little site. Enjoy!</p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <Logos />
    </div>
  )
}

export default App
