import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';

const Counter = () => {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Counter: {count}</h1>
            <button onClick={() => dispatch(decrement())} style={{ marginRight: '10px' }}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
        </div>
    );
};

export default Counter;
