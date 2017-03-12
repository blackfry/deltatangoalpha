import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { reducer as formReducer } from 'redux-form';
import rootEpic from './redux/epics';
import { reducers } from './redux/reducer';
import { reducer as responsive } from 'redux-mediaquery';
import { Router, Route, browserHistory } from 'react-router';

import App from './App';
import AddProductFormContainer from './components/addproduct';
import ProductDetailContainer from './components/productdetail'
import ProductListContainer from './components/productlist';


const epicMiddleware = createEpicMiddleware(rootEpic);

const createStoreWithMiddleware = compose(
            applyMiddleware(thunk, epicMiddleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )(createStore);

const reducer = combineReducers(
    {
        ...reducers,
        form: formReducer,
        media: responsive
    });

export const store = createStoreWithMiddleware(reducer);


// define routes
const Application = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/products/" component={ProductListContainer}/>
                <Route path="/products/(:id)" component={ProductDetailContainer}/>
                <Route path="/addproduct/" component={AddProductFormContainer}/>
            </Route>
        </Router>
    </Provider>);

ReactDOM.render(Application, document.getElementById('root'));

