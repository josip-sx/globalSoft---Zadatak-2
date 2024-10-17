import { countReset } from "console";
import React from "react";
import { FunctionComponent, useState } from "react";

export const CounterApp: FunctionComponent = () => {
    const [count, setCountValue] = useState(0);
    const incrementCount = () => {
        setCountValue((prevState) => prevState + 1)
    }
    const decrementCount = () => {
        setCountValue((prevState) => prevState - 1)
    }
    return(
        <>
            <button onClick={/* () =>  */incrementCount}>Increment</button>
            <h1>Trenutni count: {count}</h1>
            <button onClick={/* () =>  */decrementCount}>Decrement</button>
        </>
    );
}