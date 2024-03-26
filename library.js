const myLibrary = [];

//Constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}`) ;
    };
} 

    //Add book to library
    function addBookToLibrary(title, author, pages, read) {
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
    }
    addBookToLibrary('The Hobbit', 'by J.R.R Tolkien,', '295 pages,', 'not read yet');

console.log(myLibrary);

//Display books in library
let book = '';
myLibrary.forEach(displayBook);

function displayBook(item, index){
   book += index + ':' + item + '<br>';
   document.getElementById('display').innerHTML = book;
   console.log(index, item);
}

//Buttons
const addNewBook = document.getElementById('.addBook');










