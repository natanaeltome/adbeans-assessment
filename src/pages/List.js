import { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './List.scss';
import 'ag-grid-community/styles/ag-grid.css';

const List = ({ rowData }) => {

    const columnDefs = [
        { field: 'name' },
        { field: 'players' },
        { field: 'rating' },
        { field: 'rank' },
        { field: 'price' },
    ];

    return (
        <div className="container">
            <h2>Natanael's Collection</h2>
            <div style={{ height: 500, width: 800, color: "#fff" }}>
                <AgGridReact
                    rowData={rowData} // Row Data for Rows
                    columnDefs={columnDefs} // Column Defs for Columns
                    animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                />
            </div>
        </div >
    );
};

export default List;