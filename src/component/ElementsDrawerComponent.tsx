import React, { useState } from "react";
import { GridData, GridDataType } from "./types";
import MainComponent from "./mainComponent";


function consumeInput(dataInputLines: string): GridData[] {

    const lines = dataInputLines.split(/\r?\n/);

    const dataList: GridData[] = [];


    lines.forEach((line) => {
        const data = consumeInputLine(line);

        if (data != null) {
            dataList.push(data);
        }
    });

    return dataList;
}


function consumeInputLine(dataInput: string): GridData | null {
    if (!dataInput) {
        return null;
    }

    const arr = dataInput.split(";");
    const typeStr = arr[3];

    if (!(typeStr in GridDataType)) {
        throw "wrong field type";
    }

    const type: GridDataType = GridDataType[typeStr as keyof typeof GridDataType];


    let value: string[] = [arr[4]];

    if (type === GridDataType.SELECT) {
        value = value[0].split(",");
    }

    return {
        line: Number(arr[0]),
        column: Number(arr[1]),
        label: arr[2],
        type: type,
        values: value
    }
}




export default function ElementsDrawerComponent() {

    const initial_data = "2;1;gender;SELECT;Male,Female\n\
1;2;First Name;TEXT_INPUT;Enter your first name\n\
2;2;maritial status;SELECT;Single,Maried,Divorced\n\
1;1;Last Name;TEXT_INPUT;Enter your last name";


    const [dataStr, setDataStr] = useState(initial_data);
    const [finalData, setFinalData] = useState<GridData []>([]);

    const onChange = (e) => {
        const data = e.target.value;
        setDataStr(data);
    };

    const loadData = (e) => {
        //console.log(`data loaded:${dataStr}`);

        const data = consumeInput(dataStr);

        setFinalData(data);
    };

    


    return (
        <div>
            <textarea
                value={dataStr}
                onChange={onChange}
                rows={5} cols={60} /><p></p>
            <button onClick={loadData}>Load data</button>

            <div>
                <MainComponent gridDataList={finalData}/>
            </div>
        </div>
    )
}