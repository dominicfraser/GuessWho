class Question {
  constructor(optionsHash){
    this.title = optionsHash.title
    this.checkParam = optionsHash.checkParam
    this.valueToMatch = optionsHash.valueToMatch
  }
}

export default Question