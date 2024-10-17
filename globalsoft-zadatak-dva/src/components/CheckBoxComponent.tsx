import React from "react";
import { FunctionComponent, useState } from "react";

export const CheckBox: FunctionComponent = () => {
    const [checkBoxValue, setCheckBoxValue] = useState(false);
    const changeCheckedValue = () => {
        setCheckBoxValue((prevState) => !prevState);
    }
    return(
        <>
        <input type="checkbox" checked={checkBoxValue} onChange={() => changeCheckedValue()}/>
        <p>{checkBoxValue ? 'I accept terms of agreement' : 'I do not accept terms of agreement'}</p>
        </>
    );
}