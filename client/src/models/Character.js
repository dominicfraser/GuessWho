class Character {
  constructor(optionsHash){
    this.name = optionsHash.name
    this.sex = optionsHash.sex
    this.skinColour = optionsHash.skinColour
    this.flight = optionsHash.flight
    this.planet = optionsHash.planet
  }
}

export default Character