import React from 'react'

const QuestionPicker = function(props){

  const options = props.possibleQuestions.map((question, index) => {
    return (
      <option key={index} value={question.title}>{question.title}?</option>
      )
  })

  if(props.guess === "not yet guessed"){
    return (
        <section id='question-picker-section'>
          <select onChange={props.onSelectedQuestionChange}>
            {options}
          </select>
          <button onClick={props.onAskQuestionClick}>Ask</button>
        </section>
      )
  } else {
    return null
  }

}

export default QuestionPicker