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
   //book += index + ':' + item + '<br>';
   document.getElementById('display').innerHTML = book;
   for(var key in myLibrary){
    book += '<span>'+myLibrary[key].title+', '+ myLibrary[key].author+', '+ myLibrary[key].pages+', '+ myLibrary[key].read+'<br></span>';
   }
   console.log(index, item);
}

//Buttons
const addNewBook = document.getElementById('.addBook');










