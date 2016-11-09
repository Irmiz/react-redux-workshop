import Component from './Component';
const defaultState = [
    'a',
    'b'
];

// Actions

// Reducer
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Action creators

export {
    Component as default,
    reducer
}
