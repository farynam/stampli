import { GridData, GridDataType } from "./types";

const SelectInputComponent = ({ gridData }: { gridData: GridData }) => {
    const values = gridData.values.map((value) => <option key={`${value}`} value={value}>{value}</option>);
    return (
        <>  
            <span>
            <label
                htmlFor={gridData.label}>{gridData.label} </label>
            </span>
            <span>
                <select
                    id={gridData.label}>
                    {values}
                </select>
            </span>
        </>
    )


}

export default SelectInputComponent;