import React from 'react';
import PropTypes from 'prop-types';

const storeProvider = (extraProps = () => {}) => (Component) => {
  return class extends React.Component {
    static displayName = `${Component.name}Container`;
    static contextTypes = {
      store: PropTypes.object,
    }

    relevantState = () => {
      return extraProps(this.context.store, this.props);
    }
    
    state = this.relevantState();
    onStoreChange = () => {
      if (this.subscriptionId) {
        this.setState(this.relevantState());
      }
    }
    componentDidMount() {
      this.subscriptionId = this.context.store.subscribe(this.onStoreChange);
    }
    componentWillUnmount() {
      this.context.store.unsubscribe(this.subscriptionId);
      this.subscriptionId = null;
    }

    render() {
      return (
        <Component
          {...this.props}
          {...this.relevantState()}
          store={this.context.store}

        />
      );
    }
  };
};

export default storeProvider;
