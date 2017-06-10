import React from 'react'
import Header from '../components/Header'
import CharacterTile from '../components/CharacterTile'
import QuestionPicker from '../components/QuestionPicker'
import CharacterPicker from '../components/CharacterPicker'
import ResultDisplayer from '../components/ResultDisplayer'
import CharacterSeeds from '../models/CharacterSeeds'
import QuestionsSeeds from '../models/QuestionsSeeds'
import Question from '../models/Question'

class GameContainer extends React.Component {
  constructor(props){
    super(props)

    this.randomIndex = 0
    this.seedCharacters = CharacterSeeds()
    this.seedQuestions = QuestionsSeeds()

    this.state = {
      correctChar: this.seedCharacters[this.randomIndex],
      possibleChars: this.seedCharacters,
      disguardedChars: [],
      selectedChar: this.seedCharacters[0],
      possibleQuestions: this.seedQuestions,
      selectedQuestion: this.seedQuestions[0],
      numberQsAsked: 0,
      match: "not yet guessed"
    }


    this.handleCharacterChange = this.handleCharacterChange.bind(this)
    this.onSubmitCharacterClick = this.onSubmitCharacterClick.bind(this)

    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.onAskQuestionClick = this.onAskQuestionClick.bind(this)
    
  }

  render(){
console.log('render')
console.log('disguardedChars', this.state.disguardedChars)
    const tiles = this.seedCharacters.map((char, index) => {
      const srcPath = `./public/images/${char.linkName}.png`
      let opacity = 1
      if(this.state.disguardedChars.find(c => c.name === char.name) !== undefined){
        opacity = 0.3
      }

      return (
        <CharacterTile index={index} key={index} src={srcPath} opacity={opacity} />
        ) 
    })

    let result = <p>No result yet</p>
    if (this.state.match === "won"){
      result = <ResultDisplayer message="Correct! You Win!" turns={this.state.numberQsAsked}/>
    } 
    else if(this.state.match === "incorrect guess") {
      result = <ResultDisplayer message="Incorrect! You Loose!" turns={this.state.numberQsAsked}/>
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
            possibleQuestions={this.state.possibleQuestions}
          />
          <CharacterPicker
            onSelectedCharacterChange={this.handleCharacterChange}
            onSubmitCharacterClick={this.onSubmitCharacterClick}
            possibleChars={this.state.possibleChars}
          />
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
    this.setState({selectedQuestion: reducedQuestions[0]})
    this.setState({numberQsAsked: (this.state.numberQsAsked+1)})

    this.checkCharsAgainstQuestion()
  }

  checkCharsAgainstQuestion(){
    const checkParam = this.state.selectedQuestion.checkParam
    const valueToMatch = this.state.selectedQuestion.valueToMatch
    
    const newDisguardedChars = this.state.possibleChars.filter(c => c[checkParam] !== valueToMatch)
    const disguardedChars = [...newDisguardedChars, ...this.state.disguardedChars]
    this.setState({disguardedChars: disguardedChars})

    const newPossibleChars = this.state.possibleChars.filter(c => c[checkParam] === valueToMatch)
    this.setState({possibleChars: newPossibleChars})
    this.setState({selectedChar: newPossibleChars[0]})
  }

  handleCharacterChange(event){
    const charName = event.target.value
    const char = this.state.possibleChars.find(c => c.name === charName)
    this.setState({selectedChar: char})
  }

  onSubmitCharacterClick(e){
    if(this.state.selectedChar.name === this.state.correctChar.name){
      this.setState({match: "won"})
    } else {
      this.setState({match: "incorrect guess"})
    }
  }


}

export default GameContainer
