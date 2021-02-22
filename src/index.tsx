import React from 'react';
import ReactDOM from 'react-dom';
import UseObservabel from './demo/UseObservabel';
import UseEventCallback from './demo/UseEventCallback';
import UseRxJS from './demo/UseRxJs';
import UseRxJsWithHooks from './demo/UseRxJsWithHooks';
import Editor from './demo/Editor';

import './index.css';

const App = () => {
  return <div>
    {/* <UseObservabel />
    <UseEventCallback />
    <UseRxJS />
    <UseRxJsWithHooks /> */}
    <Editor />
  </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));