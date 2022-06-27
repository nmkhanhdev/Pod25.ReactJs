

import React from 'react';
import './index.css';
// import App from './components/styled/App';
// import App from './components/redux-thunk/App';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './services/serviceWorker';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <App />
);

reportWebVitals();

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


// import React from "react";
// import './index.css';
// import { render } from "react-dom";
// import { createStore, applyMiddleware } from "redux";
// import { Provider } from "react-redux";
// import createSagaMiddleware from "redux-saga";
// import reducer from "./components/redux-saga/reducers";
// import mySaga from "./components/redux-saga/sagas";
// import App from "./components/redux-saga/App";
// // create the saga middleware
// const sagaMiddleware = createSagaMiddleware();
// // mount it on the Store
// const store = createStore(reducer, applyMiddleware(sagaMiddleware));
// // then run the saga
// sagaMiddleware.run(mySaga);

// const AppBooter = () => {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// };
// render(<AppBooter />, document.getElementById("root"));

