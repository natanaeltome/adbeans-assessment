import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './Table.scss';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';

const Table = ({ rowData }) => {
    const columnDefs = [
        { field: 'name', sortable: true, filter: true },
        { field: 'players', sortable: true, filter: true },
        { field: 'rating', sortable: true, filter: true },
        { field: 'rank', sortable: true, filter: true },
        { field: 'price', sortable: true, filter: true },
    ];

    return (
        <div style={{ height: '100%', width: '100%', color: "#fff", 'paddingTop': '30px' }}>
            <AgGridReact className="ag-theme-material"
                rowData={rowData} // Row Data for Rows
                columnDefs={columnDefs} // Column Defs for Columns
                animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            />
        </div>
    );
};

export default Table;