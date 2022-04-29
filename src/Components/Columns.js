import React,{useState} from "react";


// export const COLUMNS = [
    
//     {
//         Header: 'FLOOR',
//         accessor: 'LotAlloted'
//     },
//     {
//         Header: 'DATE',
//         accessor: 'DATE'
//     },
//     {
//         Header: 'CHECK IN TIME',
//         accessor: 'CHECK IN'
//     },
//     {
//         Header: 'CHECK OUT TIME',
//         accessor: 'CHECK OUT'
//     },
// ]

export const COLUMNS = [
        {
            Header: 'FLOOR',
            accessor: 'FLOOR',
           
            sticky: 'left'
        },
        {
            Header: 'CHECK IN TIME',
            accessor: 'CheckIN',

            
            sticky: 'left'
        },
        {
            Header: 'CHECK OUT TIME',
            accessor: 'CheckOUT',
    
           
            sticky: 'left'
        },
        {
            Header: 'DATE',
            accessor: 'DATE',
    
           
            sticky: 'left'
        }
    ]

  