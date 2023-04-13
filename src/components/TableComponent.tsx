import React, {useMemo} from 'react'
import { useTable } from 'react-table'
import Style from './TableComponent.module.css'


function TableComponent(props) {
   const data = props.users;
   const columns = useMemo(()=> [
    {
    Header: "Email",
    accessor: "email"
    },
   {
    Header: "Age",
    accessor: "age"
   },
],[]);

const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data })

  return (
    <div className={Style.container}>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=>(
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {column.render("Header")}
                            </th>
                            ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                        <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                    ))}
                    </tr>
                );
                })}
            </tbody>
        </table>
    </div>
  );
}

export default TableComponent
