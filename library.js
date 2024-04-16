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
    const library = document.querySelector('.library');
    const card = document.createElement('div');
    card.classList.add('card');
    library.appendChild(card);

    const title = document.createElement('p');
    title.classList.add('title');
    card.appendChild(title);
    title.textContent = item.title;

    const author = document.createElement('p');
    author.classList.add('author');
    card.appendChild(author);
    author.textContent = item.author;

    const pages = document.createElement('p');
    pages.classList.add('pages');
    card.appendChild(pages);
    pages.textContent = item.pages;

    const read = document.createElement('p');
    read.classList.add('read');
    card.appendChild(read);
    read.textContent = item.read;
    
}
//    document.getElementById('display').innerHTML = book;
//    for(var key in myLibrary){
//     book += ''+myLibrary[key].title+', '+ myLibrary[key].author+', '+ myLibrary[key].pages+', '+ myLibrary[key].read+'<br>';
//    }
//console.log(index, item);
//}

//NEW BOOK button opens the dialog modally
const dialog = document.querySelector('dialog');
const newBook = document.getElementById('newBook')
newBook.addEventListener('click', () => {
    dialog.showModal();
});

//Close button closes the dialog
const closeButton = document.getElementById('closeButton');
closeButton.addEventListener('click', () => {
    dialog.close(); 
});

//Add Book button prints added book
const addBook = document.getElementById('addBook');
addBook.addEventListener('click', () =>{

});










