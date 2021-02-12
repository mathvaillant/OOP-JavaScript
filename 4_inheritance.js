function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//getSummary
Book.prototype.getSummary = function() {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine Constructor 
// Magazine will inherit the Book Object properties
// Magazine owns the month property
function Magazine(title, author, year, month) {
  // Object.call() gets the properties
  // 'this' calls the Object itself
  Book.call(this, title, author, year);

  // Specify the Magazine's property then
  this.month = month;
}

// Inherit prototype from Book Object
Magazine.prototype = Object.create(Book.prototype);
// Use Magazine Constructor 
Magazine.prototype.constructor = Magazine;

// Instantiate Magazine Object
const mag1 = new Magazine('Mag One', 'John Doe', '2018', 'Jan');

console.log(mag1);