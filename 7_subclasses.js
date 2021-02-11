class Book {
  constructor(title, author, year) {
    (this.title = title), (this.author = author), (this.year = year);
  }
  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
}

//Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    // super() calls the parent constructor
    super(title, author, year);
    this.month = month;
  }
}

// Instantiate Magazine
const mag1 = new Magazine("Mag One", "John Doe", "2018", "Jan");

console.log(mag1.getSummary());

// using subclasses is a lot easier than using inheritance with es5. We don't have to add prototypes
