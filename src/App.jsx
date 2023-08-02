import React, { useEffect } from 'react'
import Profile from './components/Profile'
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import Homepage from './components/Hompage'
import { useState } from 'react'

function App() {
  const [currentCharacter, setcurrentCharacters] = useState({}) 
  const {name} = useParams()
  useEffect(() =>{}, [currentCharacter])

  return (
    <Routes>
        <Route element={<Homepage setcurrentCharacters = {setcurrentCharacters} />} path='/' />
        <Route element={<Profile currentCharacter = {currentCharacter} />} path={`/about/:name`} />

      </Routes>
  )
}

export default App 