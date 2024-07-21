const library = [];

function Book(id,title,author,pages,read) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook(){
    const id = library.length + 1;
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');
    /*console.log(title.value);
    console.log(author.value);
    console.log(pages.value);
    console.log(read.value);*/
    
    const newBook = new Book(id,title.value,author.value,pages.value,read.value);
    library.push(newBook);
    console.log(library);
    
    const libraryTable = document.querySelector('#library-table');
    const newRow = document.createElement('tr');
    const newTitle = document.createElement('th');
    const newAuthor = document.createElement('th');
    const newPages = document.createElement('th');
    const newRead = document.createElement('th');
    const del = document.createElement('th');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    del.appendChild(deleteButton);

    newTitle.textContent = newBook.title;
    newAuthor.textContent = newBook.author;
    newPages.textContent = newBook.pages;
    newRead.textContent = newBook.read;
    
    newRow.appendChild(newTitle);
    newRow.appendChild(newAuthor);
    newRow.appendChild(newPages);
    newRow.appendChild(newRead);
    newRow.appendChild(del);
    libraryTable.appendChild(newRow);


}

const addButton = document.querySelector('#add-button');
document.addEventListener("submit",(event) => {
    event.preventDefault();
    addBook();
})
