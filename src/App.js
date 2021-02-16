import './App.css';

import { Component } from 'react';
import { CardList } from './components/card-list/card-list.jsx';
import { SearchBox } from './components/search-box/search-box.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      books: [],
      searchField: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
   fetch('http://localhost:3000/books')
   .then(res => res.json())
   .then(books => this.setState({books: books}));
  }

  handleChange(e) {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { books, searchField } = this.state;
    const filteredBooks = books.filter(book => 
      book.name.toLowerCase()
        .includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Library Store</h1>
        <SearchBox 
          placeholder="Search books"
          handleChange={this.handleChange}
        />
        <CardList books={ filteredBooks } />
      </div>
    );
  }
}

export default App;
