import React, {Component} from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Field, reduxForm} from 'redux-form'
import {RaisedButton, TextField} from 'material-ui'
import {addNewProductInitiateActionCreator, loadProductsInitiateActionCreator} from '../redux/actions';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {Panel} from 'react-bootstrap/lib/Panel';
import {Product} from './product'

// https://github.com/callemall/material-ui/issues/4670
injectTapEventPlugin();

// const required = value => value == null ? 'Required' : undefined;


const renderTextField = ({input, context, label, meta: {touched, error}, ...custom})=> (
    <TextField
        hintText={label}
        floatingLabelText={label}
        errorText={touched && error}
        {...input}
        {...custom}
    />
);


let AddProductForm = props => {
    const {handleSubmit, pristine, submitting} = props;

    return (
        <MuiThemeProvider>
            <div style={{padding: '30px'}}>
                <form onSubmit={handleSubmit}>
                    <div>
                        <Field
                            name="name"
                            component={renderTextField}
                            label="Name"
                            hintText="min 10 characters required"/>
                    </div>
                    <div>
                        <Field
                            name="image"
                            component={renderTextField}
                            label="Image"
                            hintText="url must start with 'http'"/>
                    </div>
                    <div>
                        <Field
                            name="promocode"
                            component={renderTextField}
                            label="Promo Code"
                            hintText="Optional"/>
                    </div>
                    <div>
                        <RaisedButton
                            label="Create Product"
                            primary={true}
                            style={{margin: '12px'}}
                            type="submit"
                            disabled={pristine || submitting}
                        />
                    </div>
                </form>
            </div>
        </MuiThemeProvider>
    )
};


const validate = values => {
    const errors = {};
    const requiredFields = ["name", "image",];
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    });

    if (values.name  && values.name.length < 10) {
        errors.name = 'Product name must be minimum 10 characters'
    }
    if (values.image && values.image.slice(0, 4) !== 'http') {
      errors.image = 'Image url must start with http'
    }
    return errors
};


AddProductForm = reduxForm({
    form: 'addProductForm',
    validate
})(AddProductForm);


const mapStateToProps = (state) => ({
    PRODUCT: state.PRODUCT,
    form: state.form
});

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});


export class AddProductFormContainer extends Component {

    componentWillMount() {
        if (!this.props.PRODUCT.productListLoaded) {
            this.props.dispatch(loadProductsInitiateActionCreator())
        }
    }

    asyncFormSubmitHandler = productObj => {
        this.props.dispatch(addNewProductInitiateActionCreator(productObj));

    };

    render() {
        if(this.props.PRODUCT.addNewProductSuccess) {
            return (
                <div>
                    <div className="animated slideInDown">
                        <div className="Detail-container">
                            <div className="Product-detail">
                                <Product
                                    {...this.props.PRODUCT.newProduct}
                                    view="detail"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="Product-form-container">
                        <div className="Product-form">
                            <Panel>
                                <div>
                                    <AddProductForm
                                        dispatch={this.props.dispatch}
                                        onSubmit={ this.asyncFormSubmitHandler }
                                    />
                                </div>
                            </Panel>
                        </div>
                    </div>
                </div>
            )
        }

        if(!this.props.PRODUCT.addNewProductSuccess) {
            return (
                <div className="Product-form-container">
                    <div className="Product-form">
                        <Panel>
                            <div>
                                <AddProductForm
                                    dispatch={this.props.dispatch}
                                    onSubmit={ this.asyncFormSubmitHandler }
                                />
                            </div>
                        </Panel>
                    </div>
                </div>
            )
        }
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProductFormContainer);