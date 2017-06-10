import React from 'react'
import Header from '../components/Header'
import CharacterTile from '../components/CharacterTile'
import QuestionPicker from '../components/QuestionPicker'
import CharacterSeeds from '../models/CharacterSeeds'

class GameContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      possibleChars: CharacterSeeds(),
      possibleQuestions: ['Do they have green skin', 'two'],
      selectedQuestion: [],
      numberQsAsked: 0
    }

    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.onAskQuestionClick = this.onAskQuestionClick.bind(this)
  }

  render(){
    const tiles = this.state.possibleChars.map((char, index) => {
      const srcPath = `./public/images/${char.name}.png`
      return (
        <CharacterTile index={index} key={index} src={srcPath} />
        ) 
    })

    return (
        <div className='game-container'>
          <Header heading="Heroes Guess Who" />
          <div className='character-tiles-grid'>
            {tiles}
          </div>
          <QuestionPicker 
            onSelectedQuestionChange={this.handleQuestionChange} 
            onAskQuestionClick={this.onAskQuestionClick}
            possibleQuestions={this.state.possibleQuestions}/>
        </div>
      )
  }

  handleQuestionChange(event){
    const question = event.target.value
    this.setState({selectedQuestion: question})
  }

  onAskQuestionClick(e){
    const questionIndex = this.state.possibleQuestions.indexOf(this.state.selectedQuestion)
    const reducedQuestions = this.state.possibleQuestions.slice().splice(questionIndex, 1)
    this.setState({possibleQuestions: reducedQuestions})
    this.setState({numberQsAsked: (this.state.numberQsAsked+1)})

  }

}

export default GameContainer
