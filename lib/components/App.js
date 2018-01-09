import React from 'react';
import axios from 'axios';
import ArticleList from './ArticleList';
import DataApi from 'state-api';
import { data } from './../testData';
const api = new DataApi(data);

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      articles: api.getArticles(),
      authors: {},
    };
  }

  componentDidMount() {
    console.log('ding');
  }

  // async componentDidMount() {
  //   const resp = await axios.get('/data');
  //   const api = new DataApi(resp.data);
  //
  //   this.setState(() => ({
  //     articles: api.getArticles(),
  //     authors: api.getAuthors(),
  //   }));
  // }
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  }
  render() {
    return(
      <div>
        <h3>Its a thing</h3>
        <ArticleList
          articles={this.state.articles}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}

export default App;
