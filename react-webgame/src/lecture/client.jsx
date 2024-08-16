// import React from 'react';
// import ReactDom from 'react-dom';
// import { hot } from 'react-hot-loader/root';

// import NumberBaseball from './NumberBaseball';

// const Hot = hot(NumberBaseball);

// ReactDom.render(<Hot></Hot>, document.querySelector('#root'));

// 위 코드는 강의 코드이고, 아래 코드는 지피티 코드인데,
// 강의와 버전이 다르기 때문에 위 코드가 호환이 되지 않으므로
// 아래의 코드를 활용할 것임

import React from 'react';
import ReactDOM from 'react-dom/client';
import NumberBaseball from './NumberBaseball';

const root = ReactDOM.createRoot(document.getElementById('root'));

const render = (Component) => {
  root.render(
    <React.StrictMode>
      <Component />
    </React.StrictMode>
  );
};

render(NumberBaseball);

if (module.hot) {
  module.hot.accept('./NumberBaseball', () => {
    const NextApp = require('./NumberBaseball').default;
    render(NextApp);
  });
}
