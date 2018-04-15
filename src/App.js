import React from 'react'
import ReactDOM from 'react-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './components/listBooks'
import SearchBooks from './components/searchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  onGreet() {
    alert("Hello!");
  }

  componentDidMount() {
    BooksAPI.getAll().then(res => {
        // console.log('RES IS: ', res);
    });
  }

  render() {
    return (
      <div className="app">
          {/* <Route exact path="/" component={ListBooks}/> */}
          <Route path="/search" component={SearchBooks}/>
          <Route 
            exact path="/" 
            render={() => <ListBooks greet={this.onGreet} /> }
          />
          {/* <Route 
            path="/search" 
            render={() => <SearchBooks {...props} /> }
          /> */}
      </div>
    )
  }
}

export default BooksApp
