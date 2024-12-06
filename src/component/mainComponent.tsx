import React, { useEffect, useState } from 'react';
import { GridData, GridDataType } from './types';
import TextInputComponent from './TextInputComponent';
import SelectInputComponent from './SelectInputComponent';

function builder(gridDataList: GridData[]): React.ReactNode[] {

    gridDataList = gridDataList.sort((a: GridData, b: GridData) => {

        if (a.line === b.line) {
            return a.column - b.column;
        }

        return a.line - b.line
    });


    return gridDataList.map((gridData) => {
        if (gridData.type === GridDataType.SELECT) {
            return (
                <SelectInputComponent gridData={gridData} />
            )
        }

        return (
            <TextInputComponent gridData={gridData} />
        )
    });

}

function orderPositions(gridDataList: React.ReactNode[]): React.ReactNode[] {
    const out: React.ReactNode[] = [];


    for (let i = 0; i < gridDataList.length; i += 2) {
        out.push(
        <tr key={i}>
            <td>{gridDataList[i]}</td>
            <td>{gridDataList[i + 1]}</td>
        </tr>)
    }

    return out;
}


interface MyComponentProps {
    gridDataList: GridData[]
}

const MainComponent: React.FC<MyComponentProps> = ({ gridDataList }) => {

    useEffect(() => {
        console.log("component created");

        return () => {
            console.log("component destroyed");
        }
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th style={{textAlign: "center"}} colSpan={2}>Parsed Form meta data</th>
                 
                </tr>
                
            </thead>
            <tbody>
                {orderPositions(builder(gridDataList))}
            </tbody>
        </table>
    )
}

export default MainComponent;