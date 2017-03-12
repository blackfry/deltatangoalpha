// ***** SERVER CONFIG *****
// *************************



var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors')
require('es6-promise').polyfill();
require('isomorphic-fetch');
var port = 3001;


var app = express();
var server = require('http').createServer(app);


const corsOptions = { origin: 'http://localhost:3000' };
app.use(cors(corsOptions));


// Configure app to use bodyParser to parse json data
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



// Start the server
server.listen(port);
console.log('Server is listening on port ' + port);


// ****************************
// ****************************




// ********** SIMULATED API ***********
// ************************************


let productData =
{
    "products": [
        {
            "id": 1,
            "name": "product 1",
            "image": "http://lorempixel.com/300/250/city/image%201",
            "code": ""
        },
        {
            "id": 2,
            "name": "product 2",
            "image": "http://lorempixel.com/300/250/city/image%202",
            "code": "promo1"
        },
        {
            "id": 3,
            "name": "product 3",
            "image": "http://lorempixel.com/300/250/city/image%203",
            "code": ""
        },
        {
            "id": 4,
            "name": "product 4",
            "image": "http://lorempixel.com/300/250/city/image%204",
            "code": "promo1"
        },
        {
            "id": 5,
            "name": "product 5",
            "image": "http://lorempixel.com/300/250/city/image%205",
            "code": ""
        },
        {
            "id": 6,
            "name": "product 6",
            "image": "http://lorempixel.com/300/250/city/image%206",
            "code": "promo1"
        },
        {
            "id": 7,
            "name": "product 7",
            "image": "http://lorempixel.com/300/250/city/image%207",
            "code": ""
        },
        {
            "id": 8,
            "name": "product 8",
            "image": "http://lorempixel.com/300/250/city/image%208",
            "code": "promo1"
        },
        {
            "id": 9,
            "name": "product 9",
            "image": "http://lorempixel.com/300/250/city/image%209",
            "code": ""
        },
        {
            "id": 10,
            "name": "product 10",
            "image": "http://lorempixel.com/300/250/city/image%2010",
            "code": "promo1"
        },
        {
            "id": 11,
            "name": "product 11",
            "image": "http://lorempixel.com/300/250/city/image%2011",
            "code": ""
        },
        {
            "id": 12,
            "name": "product 12",
            "image": "http://lorempixel.com/300/250/city/image%2012",
            "code": "promo1"
        }
    ]
};




app.get('/api/products/', function (req, res) {
    res.status(200).json(productData);
});



app.get('/api/products/:id/', function(req, res) {
    var productID = req.params.id;

    try {
        let productObj = productData.products.filter(x => x.id.toString() === productID)[0]; // find relevant product obj from product ID in request param
        if(typeof productObj !== 'undefined') {
            res.status(200).json(productObj);
        } else {
            res.status(500).json({'message': 'The product ID you requested does not exists', 'details' : "No results for product id " + productID});
        }
    } catch(err) {
        res.status(500).json({'message': 'The product ID you requested does not exists', 'details' : "No results for product id " + productID});
    }
});



