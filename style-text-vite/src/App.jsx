import { useState } from 'react'
import './App.css'
import React from 'react';
import StyleText from './components/styleText.jsx';
import AlertButton from './components/AlertButton.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ padding: '2rem'}}>
        <h1>Style Text Example</h1>
        <StyleText text="a red Styled Text " color="red" />

        <AlertButton label="Download CV" />
        <AlertButton label="Send Message" />
      </div>
    </>
  )
}

export default App
