import React from 'react'
import ReactDOM from 'react-dom'
import GameContainer from './containers/GameContainer'

window.addEventListener('load', () => {
  const targetDiv = document.getElementById('app')
  ReactDOM.render(<GameContainer />, targetDiv)
})
