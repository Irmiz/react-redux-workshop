// Button/index.tsx
import * as React from 'react';
import {StatelessComponent} from 'react';

interface Props {}

const Button = (props): StatelessComponent<Props> => (
    <button {...props} type="button">
        {props.children}
    </button>
);

export {
    Button as default
};
