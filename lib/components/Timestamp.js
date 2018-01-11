import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

class Timestamp extends React.PureComponent {
  render() {
    return (
      <div>
        {this.props.timestamp.toString()}
      </div>
    );
  }
}

Timestamp.propTypes = {
  timestamp: PropTypes.instanceOf(Date).isRequired,
};

const extraProps = (store) => {
  return {
    timestamp: store.getState().timestamp,
  };
};

export default storeProvider(extraProps)(Timestamp);
