import React, { useState } from 'react';
const PureComponent = () => {
    const [number, setNumber] = useState(123)
    return (
        <div>
            <h1>Pure Components</h1>
            <span>Number is: {number}</span>
            <button onClick={() => setNumber(456)}>Change number</button>
        </div>
    );
}

export default PureComponent;