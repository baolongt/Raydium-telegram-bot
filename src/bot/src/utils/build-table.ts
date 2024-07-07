type DataType = string | number

export const buildTable = (data: DataType[][], columns: {
    key: string,
    width: number
}[]) => {
    const header = "| " + columns.map(c => c.key.padEnd(c.width)).join(" | ") + " |";
    const divider = "| " + columns.map(c => "-".repeat(c.width)).join(" | ") + " |";
    const rows = data.map((row) => "| " + row.map((item, index) => String(item).padEnd(columns[index].width)).join(" | ") + " |");
    return [header, divider, ...rows].join("\n");
}