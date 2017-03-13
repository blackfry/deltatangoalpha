import {
    LOAD_PRODUCTS_FAILED,
    LOAD_PRODUCTS_INITIATE,
    LOAD_PRODUCTS_SUCCESS,

    ADD_NEW_PRODUCT_SUCCESS,

} from './actionTypes'

let defaultProductState = {
    productListLoaded: false,
    initiated: false,
    failed: false,
    addNewProductSuccess: false,
    products: [],
    newProduct: {},
};

const productReducer = (state = defaultProductState, action) => {
    switch (action.type) {

        case LOAD_PRODUCTS_INITIATE:
            return {
                ...state,
                initiated: true,
                productListLoaded: false,
                addNewProductSuccess: null
            };

        case LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                initiated: false,
                productListLoaded: true,
                products: action.response.products,
                addNewProductSuccess: null
            };

        case LOAD_PRODUCTS_FAILED:
            return {
                ...state,
                failed: true,
                productListLoaded: false
            };

        case ADD_NEW_PRODUCT_SUCCESS:

            let newProductsArr = state.products;
            let newProductObj = action.newProductObj;

            // provide a unique id for the newly created product
            newProductObj.id = newProductsArr.length + 1;

            newProductsArr.push(newProductObj);

            return {
                ...state,
                addNewProductInitiate: false,
                addNewProductSuccess: true,
                addNewProductError: false,
                newProduct: action.newProductObj,
                products: newProductsArr
            };

        default:
            return state
    }
};


export const reducers = {
    PRODUCT: productReducer
};
