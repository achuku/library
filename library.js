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

// Add the toggleReadStatus method to the Book prototype
Book.prototype.toggleReadStatus = function() {
    this.read = !this.read; // Toggle the read status
};

//Add book to library array
function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', '295 pages', 'No');
addBookToLibrary('Basic Life Skills for Success', 'Sumbye Kapena', '96 pages', 'Yes');
addBookToLibrary('The Invention of Africa', 'V Y Mudimbe', '400 pages', 'No');

console.log(myLibrary);


//Display each book in card
let book = '';
myLibrary.forEach(displayBook);

function displayBook(item, index){
    const library = document.querySelector('.library');
    // while (library.firstChild) {
    //     library.removeChild(library.firstChild);
    // }

    const card = document.createElement('div');
    card.classList.add('card');
    library.appendChild(card);

    const title = document.createElement('p');
    title.className = 'title';
    card.appendChild(title);
    title.textContent = item.title;

    const author = document.createElement('p');
    author.className = 'author';
    card.appendChild(author);
    author.textContent = `Author: ${item.author}`;

    const pages = document.createElement('p');
    pages.className = 'pages';
    card.appendChild(pages);
    pages.textContent = `Pages: ${item.pages}`;

    const read = document.createElement('p');
    read.className = 'read';
    card.appendChild(read);
    read.textContent = `Read: ${item.read}`;

    const toggleButton = document.createElement('button');
    toggleButton.className = 'toggle-button';
    card.appendChild(toggleButton);
    toggleButton.textContent = 'Change Read Status';
    toggleButton.addEventListener('click', () => {
        item.toggleReadStatus();

        read.textContent = `Read: ${item.read ? 'Yes' : 'No'}`;
    });

    const removeButton = document.createElement('button');
    removeButton.className = 'remove-button';
    card.appendChild(removeButton);
    removeButton.textContent = 'Remove Book';
    removeButton.addEventListener('click', () => {
        myLibrary.splice(index, 1);
        displayBook(myLibrary);
    });
    
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

//Form prints added book on new card
document.getElementById('bookForm').addEventListener('submit', (e) => {
    // Prevent the default form submission
    e.preventDefault();

    // Get the values from the form fields
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    //Create a new Book object
    const newBook = new Book(title, author, pages, read);

    //Add new book to library
    myLibrary.push(newBook);
    //addBookToLibrary(newBook);
    //bookForm.reset();
    displayBook();
    
    // Reset the form fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('pages').value = '';
    document.getElementById('read').checked = false;
    //updateLibraryInfo(myLibrary);
    modal.close();
});

displayBook(myLibrary);










