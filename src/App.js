import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Link } from 'react-router-dom'
import SearchBook from './SearchBook';
import Library from './Library';

class BooksApp extends React.Component {
  state = {
    books: [],
    reading: [],
    wantRead: [],
    dontRead:[]
  }

  showBookShelf() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState({
        books: books,
        reading: books.filter((book) => book.shelf == 'reading'),
        wantRead: books.filter((book) => book.shelf == 'wantRead'),
        dontRead: books.filter((book) => book.shelf == 'dontRead')
      })
    })
  }

  updateBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then((books) => {
      this.showBookShelf()
    })
  }

  componentDidMount() {
    this.showBookShelf()
  }

  render() {
    return (
      <div className="app">
        <Route exact path={process.env.PUBLIC_URL + "/"} render={() => (
          <Library/>
        )} />
        <Route exact path={process.env.PUBLIC_URL + "/search"} render={() => (
          <SearchBook/>
        )} />
      </div>
    )
  }
}

export default BooksApp
