import React from 'react';
import {
    mount, shallow
} from 'enzyme';
import renderer from 'react-test-renderer';
import { Product } from '../src/components/product';

const productData =
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
    ]
}


describe('(Component) Product', () => {
    it('test rendering component produces something', () => {
        const product = productData.products[0];
        const wrapper = shallow(
            <Product {...product}/>
        );
        expect(wrapper).toHaveLength(1);
    });
});


test('Testing rendering of Product component', () => {
    const product = productData.products[0];
    const component = renderer.create(
        <Product {...product}/>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

});