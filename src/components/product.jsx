import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import { Link } from 'react-router';
import classNames from 'classnames';


export const Product = props => {
    const {id, name, image, code, view, noLink} = props;

    // Product is reused in list and details views ando is returned in a larger format for detail.
    let imgContClass = classNames("Product-image-container", view);
    let codeTextClass = classNames("Product-code-text", ((view === 'detail' && code !== '') ? 'show' : 'hidden'));

    return (
        <div className="animated fadeIn">
            <Link to={(noLink ? '/addproduct/' : '/products/'+id+'/')}>
                <Panel>
                    <Grid style={{
                        width: '100%'
                    }}>
                        <Row>
                            <Col>
                                <div className={imgContClass}>
                                    <div style={{
                                        background: 'url(' + image + ')',
                                        height: '100%',
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                    }}></div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <div>
                                    <h4>{name}</h4>
                                    <h6 className={codeTextClass}>{code}</h6>
                                </div>
                            </Col>
                        </Row>
                    </Grid>
                </Panel>
            </Link>
        </div>
    )
};


Product.propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
    code: React.PropTypes.string
};

Product.defaultProps = {
    id: 1,
    name: "There was a problem showing your product, try refreshing the page.",
    image: "https://img.buzzfeed.com/buzzfeed-static/static/2015-01/26/21/enhanced/webdr09/enhanced-1014-1422325554-19.jpg",
    code: "",
    view: "detail"
};



