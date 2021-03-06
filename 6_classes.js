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

  reDesignedBy(newAuthor) {
    this.author = newAuthor
  }
}

const residentEvil7 = new Game(
  'Resident Evil 7',
  'Horror',
  2019,
  'Umbrella Corporation'
)

console.log(residentEvil7.getSummary())
residentEvil7.reDesignedBy('PlayStation')
console.log(residentEvil7.getSummary())
