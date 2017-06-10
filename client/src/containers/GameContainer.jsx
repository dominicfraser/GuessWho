import React from 'react'
import Header from '../components/Header'
import CharacterTile from '../components/CharacterTile'

class GameContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      possibleChars: ['antman', 'batman', 'blackcanary', 'blackwidow', 'captainamerica', 'catwoman', 'cyclops', 'flash', 'greenarrow', 'hawkgirl', 'hulk', 'ironman', 'spiderman', 'starlord', 'superman', 'thor', 'wolverine', 'wonderwoman']
    }

  }

  render(){
    const tiles = this.state.possibleChars.map((char, index) => {
      const srcPath = `./public/images/${char}.png`
      return (
        <CharacterTile index={index} key={index} src={srcPath} />
        ) 
    })

    return (
        <div className='game-container'>
          <Header heading="Heroes Guess Who" />
          <div className='character-tiles-grid'>
            {tiles}
          </div>
        </div>
      )
  }

}

export default GameContainer
