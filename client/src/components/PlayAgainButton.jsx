import React from 'react'

const PlayAgainButton = function(props){

  if(props.guess !== "not yet guessed"){
    return (
          <button id={props.id} onClick={props.onPlayAgainClick}>Play Again</button>
      )
  } else {
    return null
  }

}

export default PlayAgainButton