import React from 'react';
/**
 * If component.
 */
const If = ({ children, condition }) => (
    <React.Fragment>
        { condition ? children : null }
    </React.Fragment>
);

export default If;
