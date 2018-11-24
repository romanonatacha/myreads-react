import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Book extends Component {

    static propTypes = {
        book: PropTypes.object,
        onMoveShelf: PropTypes.func.isRequired,
    }

    options = [
        { key: 'none', title: 'none' },
        { key: 'currentlyReading', title: 'Currently Reading' },
        { key: 'wantToRead', title: 'Want to Read' },
        { key: 'read', title: 'Read' }
    ]

    handleShelf = (event) => {
        event.preventDefault()
        const { book } = this.props
        book.shelf = event.target.value
        this.props.onMoveShelf(book)
    }


    render() {

        const { title, authors, imageLinks, shelf } = this.props.book
        const smallThumbnail = imageLinks ? imageLinks.smallThumbnail : ''


        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover fade" style={{ width: 128, height: 193, backgroundImage: `url(${smallThumbnail})` }}></div>
                        <div className="book-shelf-changer">
                            <select value={shelf} onChange={this.handleShelf} >
                                <option value="none" disabled>Move to...</option>
                                {this.options.map(({ key, title }) => (
                                    <option key={key} value={key}>{title}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{authors}</div>
                </div>
            </li>
        )
    }
}

export default Book