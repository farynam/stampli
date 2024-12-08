import React from 'react';
import { GridData } from './types';



export default function TextInputComponent({ gridData }: { gridData: GridData }) {
    return (
        <>
            <span>
                <label
                    htmlFor={gridData.label}>{gridData.label} </label>
            </span>
            <span>
                <input
                    key={gridData.label}
                    id={gridData.label}
                    type="text"
                    placeholder={gridData.values[0]}></input>
            </span>
        </>

    );
}