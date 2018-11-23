import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBook from './SearchBook';
import Library from './Library';

class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  showBookShelf() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({
          books: books,
          currentlyReading: books.filter((book) => book.shelf === 'currentlyReading'),
          wantToRead: books.filter((book) => book.shelf === 'wantToRead'),
          read: books.filter((book) => book.shelf === 'read')
        })
      })
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((books) => {
        this.showBookShelf(books)
      })
  }

  componentDidMount() {
    this.showBookShelf()
  }

  render() {
    return (
      <div className="app">
        <Route exact path={process.env.PUBLIC_URL + "/"} render={() => (
          <Library
            currentlyReading={this.state.currentlyReading}
            wantToRead={this.state.wantToRead}
            read={this.state.read}
            onUpdate={this.updateBookShelf} />
        )} />
        <Route exact path={process.env.PUBLIC_URL + "/search"} render={() => (
          <SearchBook books={this.state.books} onUpdate={this.updateBookShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
