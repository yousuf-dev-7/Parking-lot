import React,{useMemo} from "react";
import "./table.css";
import {COLUMNS} from './Columns';
import { useTable } from 'react-table'


export const Table = (props) => {
  return (
    <div className="App">
      <table>
        <tr>
          <th>{props.FLOOR}</th>
          <th>{props.DATE}</th>
          <th>{props.CHECKIN}</th>
          <th>{props.CHECKOUT}</th>
        </tr>
        {props.data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.FLOOR}</td>
              <td>{val.DATE}</td>
              <td>{val.CheckIN}</td>
              <td>{val.CheckOUT}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );

}

// export const Table = ({DATA}) => {
//     // Use the state and functions returned from useTable to build your UI
    
   

//     console.log("table data")
//     console.log(DATA)
//     const columns = useMemo(() => COLUMNS, [])
//   const data = useMemo(() => DATA, [])
//     const {
//       getTableProps,
//       getTableBodyProps,
//       headerGroups,
//       footerGroups,
//       rows,
//       prepareRow,
//     } = useTable({
//       columns,
//       data,
//     })
  
//     // Render the UI for your table
//     return (
//         <>
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map(headerGroup => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map(column => (
//                 <th {...column.getHeaderProps()}>{column.render('Header')}</th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {rows.map(row => {
//             prepareRow(row)
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map(cell => {
//                   return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 })}
//               </tr>
//             )
//           })}
//         </tbody>
//         <tfoot>
//           {footerGroups.map(footerGroup => (
//             <tr {...footerGroup.getFooterGroupProps()}>
//               {footerGroup.headers.map(column => (
//                 <td {...column.getFooterProps()}>{column.render('Footer')}</td>
//               ))}
//             </tr>
//           ))}
//         </tfoot>
//       </table>
//     </>
//     )
//   }