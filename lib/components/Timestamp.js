import React from 'react';
import PropTypes from 'prop-types';
import storeProvider from './storeProvider';

class Timestamp extends React.Component {
  
  shouldComponentUpdate(nextProps) {
    const currentTimeDisplay = this.timeDisplay(this.props.timestamp);
    const nextTimeDisplay = this.timeDisplay(nextProps.timestamp);
    return currentTimeDisplay !== nextTimeDisplay;
  }

  timeDisplay = (timestamp) => timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})

  render() {
    return (
      <div>
        {this.props.timestamp.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}
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
