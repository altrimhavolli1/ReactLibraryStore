import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [
        {
          id: 'acs1',
          name: 'Learning React'
        },
        {
          id: 'acs2',
          name: 'React in Action'
        },
        {
          id: 'acs3',
          name: 'The Road to React'
        }
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.books.map(book => <h1 key={book.id}> { book.name } </h1>)
        }
      </div>
    );
  }
}

export default App;
