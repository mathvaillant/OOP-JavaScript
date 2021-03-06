// we store the methods in prototype because not all Objects will have these methods.
// when stored in constructor all methods will show up in the object when calling console.log()
// when stored in prototype, you have to click on Object proto to see the available methods

// Book Constructor
function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year
}

// Calculate getBookAge
Book.prototype.getBookAge = function () {
  const years = new Date().getFullYear() - this.year
  return years
}

// Get summary
Book.prototype.getSummary = function () {
  return `Summary: ${this.title} was written by ${this.author} in ${this.year}`
}

// Revised
Book.prototype.isRevised = function (bool, when) {
  this.isRevised = bool
  this.wasRevisedIn = when
  return `${this.title} was revised in ${this.wasRevisedIn}`
}

const book1 = new Book('Dune', 'John Doe', '1997')
const book2 = new Book('Pirates', 'Jack Sarrow', '2003')

console.log(book2.hasOwnProperty('getBookAge'))
