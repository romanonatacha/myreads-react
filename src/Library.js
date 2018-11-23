import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class Library extends Component {

    render() {

        const { currentlyReading, wantToRead, read, onUpdate } = this.props


        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">i am reading now</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {currentlyReading.map(book => (
                                        <Book/>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">i will read soon</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {wantToRead.map(book => (
                                        <Book/>
                                    ))}

                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">i've already read it</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {read.map(book => (
                                        <Book/>
                                    ))}
                                </ol>
                            </div>
                        </div>
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