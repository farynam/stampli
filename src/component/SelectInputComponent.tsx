import { GridData, GridDataType } from "./types";

const SelectInputComponent = ({ gridData }: { gridData: GridData }) => {
    const values = gridData.values.map((value) => <option key={`${value}`} value={value}>{value}</option>);
    return (
        <>
            <label
                htmlFor={gridData.label}>{gridData.label}</label>
            <select
                id={gridData.label}>
                {values}
            </select>
        </>
    )


}

export default SelectInputComponent;