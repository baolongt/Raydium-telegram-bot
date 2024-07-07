import PrettyTable from 'prettytable';
type DataType = string | number

export const buildTable = (data: DataType[][], columns: string[]) => {
    const header = "\| " + columns.join(" \| ") + " \|";
    const divider = "\| " + columns.map(() => "------").join(" \| ") + " \|";
    const rows = data.map((row) => "\| " + row.join(" \| ") + " \|");
    return [header, divider, ...rows].join("\n");
}