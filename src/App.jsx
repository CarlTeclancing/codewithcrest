import React from 'react'
import Button from './components/Button'
import Navigation from './components/Navigation'
import VideoList from './components/VideoList'
import FloatingElements from './components/FloatingElements'

function App() {
  return (
    <>
      <Navigation />
      <FloatingElements />
      <h1 className="heading">Learn By Watching Tutorials</h1>

      <VideoList />

    </>
  )
}

export default App