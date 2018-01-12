import React from 'react';
import Article from './Article';

class ArticleList extends React.PureComponent {
  render() {
    const listArticles = Object.values(this.props.articles).map((article) =>
      <Article
        article={article}
        key={article.id}
      />
    );
    return (
      <div>
        {listArticles}
      </div>
    );
  }
}

export default ArticleList;
