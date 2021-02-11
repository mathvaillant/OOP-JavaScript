//constructor
// we store the methods in prototype because not all Objects will have these methods.
// when stored in constructor all methods will show up in the object when calling console.log()
// when stored in prototype, you have to click on Object proto to see the available methods

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// getAge
Book.prototype.getAge = function() {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Revise / Change Year
Book.prototype.revise = function(newYear) {
  this.year = newYear;
  this.revised = true;
};

//Instantiate an object
const book1 = new Book("Book One", "John Doe", "2013");
const book2 = new Book("Book Two", "Jane Doe", "2016");

console.log(book1.title);
console.log(book2.revised("2018"));
