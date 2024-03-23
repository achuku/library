const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        console.log(this.title, this.author, this.pages, this.read) ;
    };
} 

const book1 = new Book('The Hobbit', 'by J.R.R Tolkien', '295 pages', 'not read yet');
book1.info();