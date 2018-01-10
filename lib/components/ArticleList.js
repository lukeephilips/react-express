import React from 'react';
import Article from './Article';

const ArticleList = (props) => {
  const listArticles = Object.values(props.articles).map((article) =>
    <Article
      article={article}
      store={props.store}
      key={article.id}
    />
  );
  return (
    <div>
      {listArticles}
    </div>
  );
};

export default ArticleList;
