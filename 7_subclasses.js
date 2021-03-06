class Game {
  constructor(name, gender, year, author) {
    this.name = name
    this.gender = gender
    this.year = year
    this.author = author
  }

  getSummary() {
    return `${this.name} is a ${this.gender} game made in ${this.year} by ${this.author}`
  }
}

class Remake extends Game {
  constructor(name, gender, year, author, whatsNew, firstPlayer) {
    super(name, gender, year, author)
    this.whatsNew = whatsNew
    this.firstPlayer = firstPlayer
  }

  static getNewFeatures(whatsNew) {
    return whatsNew
  }
}

const residentEvil7 = new Remake(
  'Resident Evil 7',
  'Horror',
  2020,
  'Fox Games',
  'Improved Graphics and more maps',
  true
)

console.log(residentEvil7.getSummary())
console.log(Remake.getNewFeatures('Improved characters and more items'))
