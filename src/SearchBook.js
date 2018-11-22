import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'

class SearchBook extends Component {

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState({ query: query.trim() })
    }

    render() {

        let showingBooks

        if (this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingBooks = this.props.books.filter((book) => match.test(book.title) || match.test(book.authors))
        } else {
            showingBooks = this.props.books
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to={process.env.PUBLIC_URL + "/"}>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                        onChange={(event) => this.updateQuery(event.target.value)}
                        value={this.state.query} />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                    {showingBooks.map(book => (
                        <li key={book.id}>
                        <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                    <select onChange={(event) => this.props.onUpdate(book, event.target.value)} >
                                        <option value="none" disabled>Move to...</option>
                                        <option value="currentlyReading">i am reading now</option>
                                        <option value="wantToRead">i will read soon</option>
                                        <option value="read">already read it</option>
                                        <option value="none">None</option>
                                    </select>
                                </div>
                            </div>
                            <div className="book-title">{book.title}</div>
                            <div className="book-authors">{book.authors}</div>
                        </div>
                    </li>
                    ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBook