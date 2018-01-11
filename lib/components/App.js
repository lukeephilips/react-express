import React from 'react';
import PropTypes from 'prop-types';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import pickBy from 'lodash.pickBy';


class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object,
  }

  state = this.props.store.getState();

  getChildContext() {
    return {
      store: this.props.store,
    };
  }

  setSearchTerm = (searchTerm) => {
    this.setState({ searchTerm });
  }

  render() {
    let { articles, searchTerm } = this.state;
    if (searchTerm) {
      articles = pickBy(articles, (value) => {
        return value.title.match(searchTerm)
          || value.body.match(searchTerm);
      });
    }
    return(
      <div>
        <SearchBar
          doSearch={this.setSearchTerm}
        />
        <ArticleList
          articles={articles}
          store={this.props.store}
        />
      </div>
    );
  }
}

export default App;
