import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProductsInitiateActionCreator } from '../redux/actions';
import { Product } from './product'


const mapStateToProps = (state) => ({
    PRODUCT: state.PRODUCT
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});


export class ProductDetailContainer extends Component {

    componentWillMount() {
        // make sure the product list is loaded
        let productId = this.props.routeParams.id;
        if (!this.props.PRODUCT.productListLoaded && typeof productId !== 'undefined') {
            this.props.dispatch(loadProductsInitiateActionCreator())
        }
    }

    render() {
        if(!this.props.PRODUCT.productListLoaded) {
            return (
                <div>
                    ...loading
                </div>
            )
        }

        // search the list of products for one with the unique id we are looking for.
        // errors where no product is found are handled by defaultProps in the Product component
        let product = this.props.PRODUCT.products.filter(x => x.id.toString() === this.props.routeParams.id)[0];

        return (
            <div className="Detail-container">
                <div className="Product-detail">
                    <Product {...product} view="detail"/>
                </div>
            </div>
        )
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductDetailContainer);
