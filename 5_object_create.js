const bookPrototypes = {
  getSummary: function () {
    return `Summary: ${this.title} was written by ${this.author} in ${
      this.year
    } and ${this.revised ? 'was revised.' : 'was not revised yet.'}`
  },

  getRevised: function () {
    this.revised = true
  },
}

// Create a Book
const book1 = Object.create(bookPrototypes, {
  title: { value: 'Cosmos' },
  author: { value: 'Carl Sagan' },
  year: { value: 1992 },
})

console.log(book1.getSummary())
console.log(book1.getRevised())
console.log(book1.getSummary())
