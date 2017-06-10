import React from 'react'

const ResultDisplayer = function(props){

  return (
      <div>
        <p>Turns Taken: {props.turns}</p>
        <p>{props.message}</p>
      </div>
    )

}

export default ResultDisplayer