import React from 'react'
import Header from '../components/Header'
import CharacterTile from '../components/CharacterTile'
import QuestionPicker from '../components/QuestionPicker'
import ResultDisplayer from '../components/ResultDisplayer'
import CharacterSeeds from '../models/CharacterSeeds'
import QuestionsSeeds from '../models/QuestionsSeeds'
import Question from '../models/Question'

class GameContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      possibleChars: CharacterSeeds(),
      chosenChars: [CharacterSeeds()[1]],
      possibleQuestions: QuestionsSeeds(),
      selectedQuestion: QuestionsSeeds()[0],
      numberQsAsked: 0,
      match: false
    }


    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.onAskQuestionClick = this.onAskQuestionClick.bind(this)
  }

  render(){

    const tiles = this.state.possibleChars.map((char, index) => {
      const srcPath = `./public/images/${char.name}.png`

      let opacity = 1
      if(this.state.chosenChars.find(c => c.name === char.name) !== undefined){
        opacity = 0.3
      }

      return (
        <CharacterTile index={index} key={index} src={srcPath} opacity={opacity} />
        ) 
    })

    let result = <p>No result yet</p>
    if (this.state.match){
      result = <ResultDisplayer turns={this.state.numberQsAsked}/>
    }

    return (
        <div className='game-container'>
          <Header heading="Lego Heroes Guess Who" />
          <div className='character-tiles-grid'>
            {tiles}
          </div>
          
          {result}

          <QuestionPicker 
            onSelectedQuestionChange={this.handleQuestionChange} 
            onAskQuestionClick={this.onAskQuestionClick}
            possibleQuestions={this.state.possibleQuestions}/>
        </div>
      )
  }

  handleQuestionChange(event){
    const questionTitle = event.target.value
    const question = this.state.possibleQuestions.find(q => q.title === questionTitle)
    this.setState({selectedQuestion: question})
  }

  onAskQuestionClick(e){
    const questionIndex = this.state.possibleQuestions.findIndex( q => q.title === this.state.selectedQuestion.title)
    const reducedQuestions = this.state.possibleQuestions.slice()
    reducedQuestions.splice(questionIndex, 1)
    this.setState({possibleQuestions: reducedQuestions})
    this.setState({numberQsAsked: (this.state.numberQsAsked+1)})

    // this.setState({match: true})


  }

}

export default GameContainer
