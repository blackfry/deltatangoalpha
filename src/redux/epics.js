import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import { endpoints, dummyAPI } from './endpoints';
import { getRequestParams } from './asyncUtils';

import {
    LOAD_PRODUCTS_INITIATE,
    LOAD_SINGLE_PRODUCT_INITIATE
} from './actionTypes';

import {
    loadProductsSuccessActionCreator,
    loadProductsErrorActionCreator,
    loadSingleProductSuccessActionCreator,
    loadSingleProductErrorActionCreator,
} from './actions';


const loadProductsEpic = (action$) => action$
    .ofType(LOAD_PRODUCTS_INITIATE)
    .map(payload => getRequestParams(dummyAPI.concat(endpoints.products)))
    .switchMap((params) =>
        Observable.ajax(params)
            .map(result =>
                result.status === 200
                    ? loadProductsSuccessActionCreator(result.response)
                    : loadProductsErrorActionCreator(result)
            )
            .catch(error => Observable.of(loadProductsErrorActionCreator(error))
            ));



const loadSingleProductEpic = (action$) => action$
    .ofType(LOAD_SINGLE_PRODUCT_INITIATE)
    .map(payload => getRequestParams(dummyAPI.concat(endpoints.products, payload.id, '/')))
    .do(params => console.log({params}))
    .switchMap((params) =>
        Observable.ajax(params)
            .map(result =>
                result.status === 200
                    ? loadSingleProductSuccessActionCreator(result.response)
                    : loadSingleProductErrorActionCreator(result)
            )
            .catch(error => Observable.of(loadSingleProductErrorActionCreator(error))
            ));


export default combineEpics(
    loadProductsEpic,
    loadSingleProductEpic
);

