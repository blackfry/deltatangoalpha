import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadProductsInitiateActionCreator } from '../redux/actions';
import { Product } from './product';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


const mapStateToProps = (state) => ({
    PRODUCT: state.PRODUCT
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});


const composeProductList = props => {
    const { products } = props;

    return products.map((product, i) => {
        return (
            <div key={i} className="animated fadeIn">
                 <Col xs={12} sm={6} md={4} lg={3}>
                    <Product {...product} view="list"/>
                 </Col>
            </div>
        )
    })
};


export class ProductListContainer extends Component {

    componentWillMount() {
        if (!this.props.PRODUCT.productListLoaded) {
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

        let products = this.props.PRODUCT;
        return (
            <div className="Detail-container">
                <Grid>
                    <Row>
                        <div className="Product-list">
                            {composeProductList(products)}
                        </div>
                    </Row>
                </Grid>
            </div>
        )
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductListContainer);
