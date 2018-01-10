import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from 'components/App';

const serverRender = () => {
  return ReactDOMServer.renderToString(
    <div>
      <h1>Server!!!</h1>
      <App />
    </div>
  );
};

export default serverRender;
