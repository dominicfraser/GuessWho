import React from 'react'

const ResultDisplayer = function(props){

  return (
      <div id='results-displayer'>
        <p>Turns Taken: {props.turns}</p>
        <h2>{props.message}</h2>
      </div>
    )

}

export default ResultDisplayer