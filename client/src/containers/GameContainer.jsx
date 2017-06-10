import React from 'react'
import Header from '../components/Header'

class GameContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
        <div className='game-container'>
          <Header heading="Guess Who" />
        </div>
      )
  }

}

export default GameContainer
