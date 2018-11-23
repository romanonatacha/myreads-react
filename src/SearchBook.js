import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import PropTypes from 'prop-types'
import { search } from './utils/BooksAPI'

class SearchBook extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onMoveShelf: PropTypes.func.isRequired,
    }

    state = {
        books: []
    }

    clearBooks = () => {
        this.setState(() => ({
            books: []
        }))
    }


    updateQuery = (query) => {
        query = query.trim()

        search(query)
            .then((books) => {
                if (books.error)
                    return []

                const myBooks = this.props.books
                return books.map((book) => {
                    const searchBook = myBooks.find((myBook) => myBook.id === book.id)
                    book.shelf = searchBook ? searchBook.shelf : 'none'
                    return book;
                })
            })
            .then((books) => {
                this.setState(() => ({
                    books
                }))
            }).catch(() => {
                this.clearBooks();
            })
    }

    render() {

        const { books } = this.state
        const { onMoveShelf } = this.props
        

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to={process.env.PUBLIC_URL + "/"}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                            onChange={(event) => this.updateQuery(event.target.value)} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <Book key={book.id} book={book} onMoveShelf={onMoveShelf} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook