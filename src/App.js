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
