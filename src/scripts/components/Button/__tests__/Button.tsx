import * as React from 'react';
import Button from './../../Button';
import renderer = require('react-test-renderer');

describe('Button', () => {
    it('renders a button', () => {
        const buttonComponent = renderer.create(
            <Button />
        ).toJSON();

        expect(buttonComponent).toMatchSnapshot();
    });
});
