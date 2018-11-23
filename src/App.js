import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import SearchBook from './SearchBook';
import Library from './Library';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path={process.env.PUBLIC_URL + "/"} render={() => (
          <Library />
        )} />
        <Route exact path={process.env.PUBLIC_URL + "/search"} render={() => (
          <SearchBook books={this.state.books} onUpdate={this.updateBookShelf} />
        )} />
      </div>
    )
  }
}

export default BooksApp
