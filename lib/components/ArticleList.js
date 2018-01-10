import React from 'react';
import ArticleContainer from './ArticleContainer';

const ArticleList = (props) => {
  const listArticles = Object.values(props.articles).map((article) =>
    <ArticleContainer
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
