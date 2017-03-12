import React from 'react';
import {Link} from 'react-router';
import cart from './assets/Cart.png';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import 'rxjs';


const PageNav = () => {
    let hrefStyle = {color: 'white', textDecoration: 'none'};

    return (
        <div>
            <div className="List-nav">
                <div className="List-nav-text">
                    <Link to={'/products/'} style={hrefStyle}>Browse Products</Link>
                </div>
                <div className="List-nav-icon">
                    <Link to={'/products/'} style={hrefStyle}>
                        <i className="material-icons">search</i>
                    </Link>
                </div>
            </div>

             <div className="Add-nav">
                <div className="Add-nav-text">
                    <Link to={'/addproduct/'} style={hrefStyle}>Add a Product</Link>
                </div>
                <div className="Add-nav-icon">
                    <Link to={'/addproduct/'} style={hrefStyle}>
                        <i className="material-icons">add_shopping_cart</i>
                    </Link>
                </div>
            </div>
        </div>
    )
};


/// shared header component with navigation
export const App = props => {
    return (
        <MuiThemeProvider>
            <div className="App-container">
                <div className="App-header">
                    <img src={cart} className="App-logo" alt="logo"/>
                    <PageNav {...props}/>
                    <div className="Header-title">
                        Welcome to a Shop
                    </div>
                </div>
                {props.children}
            </div>
        </MuiThemeProvider>
    )
};

export default App;



