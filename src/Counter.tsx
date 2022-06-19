import React, { useState } from 'react';

const Counter = () => {
    const [state, setState] = useState(0);

    return (
        <button
            onClick={() => {
                setState((state) => state + 1);
            }}
        >
            Count is! {state}
        </button>
    );
};

export default Counter;
