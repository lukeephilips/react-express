import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

const styles = {
  article: {
    fontFamily: 'Tahoma',
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: {
    fontWeight: 'bold',

  },
  date: {
    fontSize: '.8em',
    color: '#888'
  },
  body: {
    paddingLeft: '20',
  },
  author: {
    paddingTop: '10',
    paddingBottom: '10',

  },
};
const dateDisplay = ((dateString) =>
  new Date(dateString).toDateString());

class Article extends React.PureComponent {
  render() {

    const { article, author } = this.props;
    return (
      <div style={styles.article}>
        <h4 style={styles.title}>{article.title}</h4>
        <div style={styles.date}>
          {dateDisplay(article.date)}
        </div>
        <div style={styles.body}>
          {article.body}
        </div>
        <div style={styles.author}>
          <p>By: <a href={author.website}>{author.firstName} {author.lastName}</a></p>
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    authorId: PropTypes.string.isRequired,
  }),
};

const extraProps = (store, originalProps) => {
  return {
    author: store.lookupAuthor(originalProps.article.authorId)
  };
};

export default storeProvider(extraProps)(Article);
