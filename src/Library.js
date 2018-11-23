import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import * as BooksAPI from './BooksAPI'


class Library extends Component {

    state = {
        books: [],
        currentlyReading: [],
        wantToRead: [],
        read: []
    }

    // showBookShelf() {
    //     BooksAPI.getAll()
    //         .then((books) => {
    //             this.setState({
    //                 books: books,
    //                 currentlyReading: books.filter((book) => book.shelf === 'currentlyReading'),
    //                 wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
    //                 read: books.filter((book) => book.shelf === 'read')
    //             })
    //         })
    // }

    // updateBookShelf = (book, shelf) => {
    //     BooksAPI.update(book, shelf)
    //         .then((books) => {
    //             this.showBookShelf(books)
    //         })
    // }

    updateBookShelf = (book, shelf) => {
        BooksAPI.update(book, shelf);
        book.shelf = shelf;
        this.setState(state => {
            books: state.books.filter(b => b.id === book.id).concat([book])
        })
    }

    // componentDidMount() {
    //     this.showBookShelf()
    // }

    async componentDidMount() {
        const books = await BooksAPI.getAll()
        this.setState({ books })
    }

    render() {

        const shelves = [
            {
                title: 'Currently Reading',
                shelf: 'currentlyReading',
            },
            {
                title: 'Want to Read',
                shelf: 'wantToRead',
            },
            {
                title: 'Read',
                shelf: 'read',
            },
        ]

        const { books, updateBookShelf } = this.props

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map(item => (
                            <BookShelf
                                key={item.title}
                                books={books}
                                title={item.title}
                                shelf={item.shelf}
                                updateBookShelf={updateBookShelf}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to={process.env.PUBLIC_URL + "/search"}>Add a book</Link>
                </div>
            </div>

        )
    }
}

export default Library