import React from 'react';
import ArticleList from './../ArticleList';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {
        'id': 'a',
        'title': 'Thing',
        'date': 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)',
        'authorId': '2c6aa2cfe3449467d329fa17d6ea230f',
        'body': 'blah blah'
      },
      b: {
        'id': 'b',
        'title': 'Ding',
        'date': 'Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)',
        'authorId': '2c6aa2cfe3449467d329fa17d6ea230f',
        'body': 'blah blah'
      },
    },
  };

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('ArticleContainer').length).toBe(2);
  });
});
