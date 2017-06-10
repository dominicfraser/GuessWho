import Question from './Question.js'

const QuestionsSeeds = function(){
  const Questions =[
    new Question({
      title: "Are they male",
      checkParam: "sex",
      valueToMatch: "male"
    }),

    new Question({
      title: "Do they have green skin",
      checkParam: "skinColour",
      valueToMatch: "green"
    }),

    new Question({
      title: "Are they female",
      checkParam: "sex",
      valueToMatch: "female"
    }),

    new Question({
      title: "Are they from earth",
      checkParam: "planet",
      valueToMatch: "earth"
    }),

    new Question({
      title: "Can they fly",
      checkParam: "flight",
      valueToMatch: "yes"
    })

  ]

  return Questions
}

export default QuestionsSeeds