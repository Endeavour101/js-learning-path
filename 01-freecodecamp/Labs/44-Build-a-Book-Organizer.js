let books = [
  {
    title: "A title",
    authorName: "AA authorName",
    releaseYear: 1940,
  },
  {
    title: "B title",
    authorName: "AA authorName",
    releaseYear: 1910,
  },
  {
    title: "C title",
    authorName: "CC authorName",
    releaseYear: 1980,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) return -1;
  if (book1.releaseYear > book2.releaseYear) return 1;
  if (book1.releaseYear === book2.releaseYear) return 0;
}

let filteredBooks = [];

for (let book of books) {
  if (book.releaseYear <= 1950) {
    filteredBooks.push(book);
  }
}

filteredBooks.sort(sortByYear);
console.log(filteredBooks);
