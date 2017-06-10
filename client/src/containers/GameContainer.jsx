import React from 'react'
import Header from '../components/Header'
import CharacterTile from '../components/CharacterTile'

class GameContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return (
        <div className='game-container'>
          <Header heading="Guess Who" />
          <CharacterTile src='./public/images/batman.png' />
        </div>
      )
  }

}

export default GameContainer
