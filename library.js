const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        return (`${this.title} by ${this.author}, ${this.pages}, ${this.read}`) ;
    };
} 

    const book1 = new Book('The Hobbit', 'J.R.R Tolkien', '295 pages', 'not read yet');
    myLibrary.push(book1);
    console.log(book1.info());
    // const book2 = new Book('Basic Life Skills for Success', 'by Sumbye Kapena', '96 pages', 'read');
    // myLibrary.push(book2);
    
    // function addBookToLibrary() {
    //     const newBook = new Book(title, author, pages, read);
    //     myLibrary.push(newBook);
    //     // title.value = '';
    //     // author.value = '';
    //     // pages.value = '';
    // }
    // addBookToLibrary('The Hobbit', 'by J.R.R Tolkien,', '295 pages,', 'not read yet');

console.log(myLibrary);