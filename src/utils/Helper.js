
export const allMyBooks = (myBooks) => {
    const shelves = new Map();
    shelves.set('currentlyReading', { title: 'Currently Reading', books: [] })
    shelves.set('wantToRead', { title: 'Want To Read', books: [] })
    shelves.set('read', { title: 'Read', books: [] })

    for (let book of myBooks) {
        const shelf = shelves.get(book.shelf)
        shelf.books.push(book)
    }
    return shelves
}  