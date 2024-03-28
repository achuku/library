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
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet');
addBookToLibrary('Basic Life Skills for Success', 'Sumbye Kapena', '96 pages', 'read');

console.log(myLibrary);

//Display books in library
let book = '';
myLibrary.forEach(displayBook);

function displayBook(item, index){
   document.getElementById('display').innerHTML = book;
   for(var key in myLibrary){
    book += ''+myLibrary[key].title+', '+ myLibrary[key].author+', '+ myLibrary[key].pages+', '+ myLibrary[key].read+'<br>';
   }
   console.log(index, item);
}

//NEW BOOK button opens the dialog modally
const dialog = document.querySelector('dialog');
const addNewBook = document.getElementById('addBook')
addNewBook.addEventListener('click', () => {
    dialog.showModal();
});










