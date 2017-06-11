class Character {
  constructor(optionsHash){
    this.name = optionsHash.name
    this.linkName = optionsHash.linkName
    this.sex = optionsHash.sex
    this.skinColour = optionsHash.skinColour
    this.flight = optionsHash.flight
    this.planet = optionsHash.planet
    this.mask = optionsHash.mask
  }
}

export default Character