import React from 'react'
import Header from '../components/Header'
import CharacterTile from '../components/CharacterTile'
import QuestionPicker from '../components/QuestionPicker'
import CharacterPicker from '../components/CharacterPicker'
import ResultDisplayer from '../components/ResultDisplayer'
import PlayAgainButton from '../components/PlayAgainButton'
import CharacterSeeds from '../models/CharacterSeeds'
import QuestionsSeeds from '../models/QuestionsSeeds'
import Question from '../models/Question'

class GameContainer extends React.Component {
  constructor(props){
    super(props)
    this.randomIndex = this.randomIntBetween(0,CharacterSeeds().length)
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
      guess: "not yet guessed"
    }

    this.handleCharacterChange = this.handleCharacterChange.bind(this)
    this.onSubmitCharacterClick = this.onSubmitCharacterClick.bind(this)

    this.handleQuestionChange = this.handleQuestionChange.bind(this)
    this.onAskQuestionClick = this.onAskQuestionClick.bind(this)

    this.onPlayAgainClick = this.onPlayAgainClick.bind(this)
  }

  render(){
console.log('render')
//set up character tiles 
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
//set up result based on if player has guessed
    let result = <p></p>
    if (this.state.guess === "won"){
      result = <ResultDisplayer message="Correct! You Win!" turns={this.state.numberQsAsked}/>
    } 
    else if(this.state.guess === "incorrect guess") {
      result = <ResultDisplayer message="Incorrect! You Loose!" turns={this.state.numberQsAsked}/>
    }

//main return
    return (
        <div className='game-container'>
          <Header heading="Lego Heroes Guess Who" />
          <div className='character-tiles-grid'>
            {tiles}
          </div>
          
          {result}
          <div id='question-button-grid'>
            <QuestionPicker 
              onSelectedQuestionChange={this.handleQuestionChange}
              onAskQuestionClick={this.onAskQuestionClick}
              possibleQuestions={this.state.possibleQuestions}
              guess={this.state.guess}
            />
            <CharacterPicker
              onSelectedCharacterChange={this.handleCharacterChange}
              onSubmitCharacterClick={this.onSubmitCharacterClick}
              possibleChars={this.state.possibleChars}
              guess={this.state.guess}
            />
          </div>
          <PlayAgainButton id='play-again-button'
            onPlayAgainClick={this.onPlayAgainClick}
            guess={this.state.guess}
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
//question values
    const checkParam = this.state.selectedQuestion.checkParam
    const valueToMatch = this.state.selectedQuestion.valueToMatch
//filter possible chars to find which match
    let newDisguardedChars = []
    if(this.state.correctChar[checkParam] === valueToMatch){
      newDisguardedChars = this.state.possibleChars.filter(c => c[checkParam] !== valueToMatch)  
    } else {
      newDisguardedChars = this.state.possibleChars.filter(c => c[checkParam] === valueToMatch)
    }
//add newly disguarded to previously disguarded
    const disguardedChars = [...newDisguardedChars, ...this.state.disguardedChars]
    this.setState({disguardedChars: disguardedChars})

//filter possible chars to remove those disguarded
    let newPossibleChars = this.state.possibleChars
    if(this.state.correctChar[checkParam] === valueToMatch){
      newPossibleChars = this.state.possibleChars.filter(c => c[checkParam] === valueToMatch)
    } else {
      newPossibleChars = this.state.possibleChars.filter(c => c[checkParam] !== valueToMatch)
    }

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
      this.setState({guess: "won"})
    } else {
      this.setState({guess: "incorrect guess"})
    }
  }

  onPlayAgainClick(e){
    const randomIndex = this.randomIntBetween(0,CharacterSeeds().length)

    this.setState({
      correctChar: this.seedCharacters[randomIndex],
      possibleChars: this.seedCharacters,
      disguardedChars: [],
      selectedChar: this.seedCharacters[0],
      possibleQuestions: this.seedQuestions,
      selectedQuestion: this.seedQuestions[0],
      numberQsAsked: 0,
      guess: "not yet guessed"
    })
  }

  randomIntBetween(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
  }


}

export default GameContainer
