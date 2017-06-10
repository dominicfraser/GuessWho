import React from 'react'

const CharacterTile = function(props){
  const opacity = props.opacity

  return (
    <img className='character-tile' src={props.src} style={{opacity: opacity}}/>
    )
  }


export default CharacterTile