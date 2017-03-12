import {
    LOAD_PRODUCTS_INITIATE,
    LOAD_PRODUCTS_SUCCESS,
    LOAD_PRODUCTS_FAILED,

    LOAD_SINGLE_PRODUCT_INITIATE,
    LOAD_SINGLE_PRODUCT_SUCCESS,
    LOAD_SINGLE_PRODUCT_ERROR,

    ADD_NEW_PRODUCT_SUCCESS,
    ADD_NEW_PRODUCT_ERROR

} from './actionTypes';


export const loadProductsInitiateActionCreator = () => ({
    type: LOAD_PRODUCTS_INITIATE
});

export const loadProductsSuccessActionCreator = response => ({
    type: LOAD_PRODUCTS_SUCCESS,
    response
});

export const loadProductsErrorActionCreator = error => ({
    type: LOAD_PRODUCTS_FAILED,
    error
});


export const loadSingleProductInitiateActionCreator = id => ({
    type: LOAD_SINGLE_PRODUCT_INITIATE,
    id
});

export const loadSingleProductSuccessActionCreator = response => ({
    type: LOAD_SINGLE_PRODUCT_SUCCESS,
    response
});

export const loadSingleProductErrorActionCreator = error => ({
    type: LOAD_SINGLE_PRODUCT_ERROR,
    error
});

// this would trigger a POST request updating the database but skipping that for simplicity
export const addNewProductInitiateActionCreator = newProductObj => ({
    type: ADD_NEW_PRODUCT_SUCCESS,
    newProductObj
});

export const addNewProductErrorActionCreator = error => ({
    type: ADD_NEW_PRODUCT_ERROR,
    error
});

