import React from 'react'

const CharacterPicker = function(props){

  const options = props.possibleChars.map((char, index) => {
    return (
        <option key={index} value={char.name}>{char.name}</option>
      )
  })

  if(props.guess === "not yet guessed"){
    return (
      <section id='character-picker-section'>
          <select onChange={props.onSelectedCharacterChange}>
            {options}
          </select>
          <button onClick={props.onSubmitCharacterClick}>Guess</button>
      </section>
    )
  } else {
    return null
  }
}

export default CharacterPicker