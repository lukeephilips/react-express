import React from 'react';
import PropTypes from 'prop-types';

import Article from './Article';

const ArticleContainer = (props, { store }) => {
  return (
    <Article
      {...props}
      store={store}
    />
  );
};

ArticleContainer.contextTypes = {
  store: PropTypes.object,
};

export default ArticleContainer;
