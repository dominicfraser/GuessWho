import React from 'react'

const QuestionPicker = function(props){

  const options = props.questions.map((question, index) => {
    return (
      <option key={index} value={question}>{question}?</option>
      )
  })

  return (
      <form id='question-picker-form'>
        <select>
          {options}
        </select>
        <input type='submit' value='Ask' />
      </form>
    )

}

export default QuestionPicker