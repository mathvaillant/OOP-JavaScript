function Book(title, author, year) {
  this.title = title
  this.author = author
  this.year = year
}

//getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`
}

const book1 = new Book('Dune', 'Jack Doe', 1998)
console.log(book1.getSummary())

// Magazine constructor
// inherites title, author and year from Book
function Magazine(title, author, year, month, membership) {
  Book.call(this, title, author, year)
  this.month = month
  this.membership = membership
}

// Inherit Book prototype methods
Magazine.prototype = Object.create(Book.prototype)
// Make Magazine.prototype return Magazine()
Magazine.prototype.constructor = Magazine

// Create Magazine
const magazine1 = new Magazine(
  'Lonely Planet',
  'Lonely Planet Media NY',
  2020,
  'January',
  'Standard'
)

console.log(magazine1)

// Magazine getSummary
Magazine.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}. Thank you for your ${this.membership} membership purchase.`
}

console.log(magazine1.getSummary())
