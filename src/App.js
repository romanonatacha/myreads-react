import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBook from './SearchBook';
import Library from './Library';
import Loader  from './Loader'
import * as BooksAPI from './utils/BooksAPI';

class BooksApp extends React.Component {

  state = {
    books: [],
    loading: true
  }

  onMoveShelf = (book) => {
    BooksAPI.update(book, book.shelf)
    .then((result) => {
      this.setState((currentState) => ({
        books: currentState.books.filter((b) => b.id !== book.id)
      }))

      if (book.shelf !== 'none')
        this.setState((currentState) => ({
          books: currentState.books.concat([book])
        }))
    })
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState(() => ({ books, loading: false}))
  }

  render() {

    if (this.state.loading) 
     return <Loader />

    return (
      <div className="app">
        <Route exact path={process.env.PUBLIC_URL + "/"} render={() => (
          <Library books={this.state.books} onMoveShelf={this.onMoveShelf} />
        )} />
        <Route exact path={process.env.PUBLIC_URL + "/search"} render={() => (
          <SearchBook books={this.state.books} onMoveShelf={this.onMoveShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
