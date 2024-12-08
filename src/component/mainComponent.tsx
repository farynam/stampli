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
        <div key={i} className='grid-row'>
            <div className="grid-col"> 
            {gridDataList[i]}
            </div>
            <div className="grid-col"> 
            {gridDataList[i + 1]}
            </div>
        </div>)
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
        <div className='grid'>
                {orderPositions(builder(gridDataList))}
        </div>
    )
}

export default MainComponent;