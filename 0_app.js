// following this video: https://www.youtube.com/watch?v=vDJpGenyHaA&t=852s
// for OOP crash course

// a string is not an object. You can call methods on a string.
// When a method is called on a string, js adds a wrapper to the string in the background.
const s1 = "Hello";
s1.toLocaleUpperCase();
console.log(typeof s1); //string

// a string can be created as an object:

const s2 = new String("Hello");
console.log(typeof s2); // object

//---------------

//window is the absolute parent object of the DOM.
// when calling objects that is a child of the window, you don't have to use the dot method but you can: ex.
// window.alert('hello') === alert('hello');
// window.navigator.appVersion === navigator.appVersion;

//-----------------

//Object Literal

// book is an object literal
const book1 = {
  title: "Book one", //key: value pair is a property of book1
  author: "John Doe",
  year: "2013",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

const book2 = {
  title: "Book Two",
  author: "John Doe",
  year: "2016",
  getSummary: function() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }
};

console.log(book1.getSummary());

//we can get value by calling:
console.log(Object.values(book1));
// we can also get keys by calling:
console.log(Object.keys(book1));

// if we need to create more than one book, we should use a constructor: see constructor.js file
