import React, { Component } from 'react'
import Book from './Book'


class BookShelf extends Component {

    render() {

        const { title, shelf } = this.props;

        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {shelf.map(book => (
                            <Book book={book} key={book.id} />
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf