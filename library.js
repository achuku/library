const myLibrary = [];

function Book(title, author, pages, isRead){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    let read;
        if(!isRead){
            read = 'not read yet';
        } else if (isRead) {
            read = 'read';  
        } 
    this.info = function(){
        return (`${this.title} by ${this.autho}, ${this.pages}, ${read} `);
    }
        
    };



    const book1 = new Book('The Hobbit', 'by J.R.R Tolkien', '295 pages', 'read'  );
    myLibrary.push(book1);

console.log(myLibrary);