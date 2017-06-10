import React from 'react'

const CharacterPicker = function(props){

  const options = props.possibleChars.map((char, index) => {
    return (
        <option key={index} value={char.name}>{char.name}</option>
      )
  })

  return (
      <section id='character-picker-section'>
          <select onChange={props.onSelectedCharacterChange}>
            {options}
          </select>
          <button onClick={props.onSubmitCharacterClick}>Choose</button>
        </section>
    )
}

export default CharacterPicker