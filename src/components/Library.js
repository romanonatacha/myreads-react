import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import BookShelf from '../components/BookShelf'
import PropTypes from 'prop-types'
import { allMyBooks } from '../utils/Helper'

class Library extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onMoveShelf: PropTypes.func.isRequired
    }

    render() {

        const shelves = allMyBooks(this.props.books);

        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {[...shelves].map(([key, value]) =>
                            <BookShelf
                                key={key}
                                title={value.title}
                                books={value.books}
                                onMoveShelf={this.props.onMoveShelf}
                            />
                        )}
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