import React, { Component } from 'react'


class Book extends Component {

    render() {

        const { onUpdate, book } = this.props
        const smallThumbnail = book.imageLinks ? book.imageLinks.smallThumbnail : ''


        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={book.shelf} onChange={(event) => onUpdate(book, event.target.value)} >
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
        )
    }
}

export default Book