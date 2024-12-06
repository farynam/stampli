export enum GridDataType {
    TEXT_INPUT,
    SELECT
}

export interface GridData {
    line: number,
    column: number,
    label: string,
    type: GridDataType,
    values: string []
}