import * as React from 'react';
import List from 'components/Items';



export default () => {
    function handleChange(event) {
        debugger;
    }

    return (
        <div>
            <input type="text"
                   onChange={handleChange}
            />
            <List />
        </div>
    );
};
