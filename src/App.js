import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBook from './components/SearchBook';
import Library from './components/Library';
import Loader  from './components/Loader'
import * as BooksAPI from './utils/BooksAPI';

class BooksApp extends React.Component {

  // declaring the empty array for books, and loading status as trus
  state = {
    books: [],
    loading: true
  }

  // moving the book of shelf, using the update API method
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

  // getting all the books and when its done turning the loading status as false
  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState(() => ({ books, loading: false}))
  }

  render() {

    // if the data still loading, the loader component will apear
    if (this.state.loading) 
     return <Loader />
    
     // routing the main components, and render it
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
