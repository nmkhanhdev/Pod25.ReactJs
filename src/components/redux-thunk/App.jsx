import React from 'react';
import { Provider } from 'react-redux';
import People from './people/People';
import store from './common/store';
import './common/style.css';

const App = () => (
    <Provider store={store}>
        <b className='text-center'>Redux-thunk demo</b>
        <div id="appContainer">
            <People />
        </div>
    </Provider>
);
export default App;