import React, { useState } from 'react';


// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function BrandCloset(props) {
    // Using hooks we're creating local state for a "heading" variable with
    // a default value of 'Functional Component'
    const [heading, setHeading] = useState('Functional Component');

    return (
        <div>
            <h2>Hello</h2>
        </div>
    );
}

export default BrandCloset;