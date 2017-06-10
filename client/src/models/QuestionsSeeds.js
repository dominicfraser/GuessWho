import Question from './Question.js'

const QuestionsSeeds = function(){
  const Questions =[
    new Question({
      title: "one",
      checkParam: "one",
      valueToMatch: "one"
    }),

    new Question({
      title: "Do they have green skin",
      checkParam: "skinColour",
      valueToMatch: "green"
    }),

    new Question({
      title: "blank",
      checkParam: "blank",
      valueToMatch: "blank"
    })

  ]

  return Questions
}

export default QuestionsSeeds