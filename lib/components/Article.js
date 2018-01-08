import React from 'react';

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

const Article = ({ article, actions }) => {
  const author = actions.lookupAuthor(article.authorId);

  return (
    <div style={styles.article}>
      <h4 style={styles.title}>{article.title}</h4>
      <p style={styles.date}>
        {dateDisplay(article.date)}
      </p>
      <p style={styles.body}>{article.body}</p>
      <div style={styles.author}>
        <p>By <a href={author.website}>{author.firstName} {author.lastName}</a></p>
      </div>
    </div>
  );
};

export default Article;
