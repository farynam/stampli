import React from 'react';
import { GridData } from './types';



export default function TextInputComponent({gridData}:{gridData: GridData}) {
    return (
        <div >
            <label 
                htmlFor={gridData.label}>{gridData.label}</label>
            <input 
                key={gridData.label}
                id={gridData.label} 
                type="text" 
                placeholder={gridData.values[0]}></input>
        </div>
        
    );
}