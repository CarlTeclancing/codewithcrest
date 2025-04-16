import React from 'react'
import Button from './components/Button'
import Navigation from './components/Navigation'
import VideoList from './components/VideoList'
import FloatingElements from './components/FloatingElements'
import Fetching from './components/api/Fetching'

function App() {
  return (
    <>
      <Navigation />
      <FloatingElements />
      <h1 className="heading">Learn By Watching Tutorials</h1>

      <VideoList />
      <Fetching />

    </>
  )
}

export default App