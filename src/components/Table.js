import { useWindowSize } from "../hooks/useWindowSize";
import { AgGridReact } from 'ag-grid-react';
import './Table.scss';

const Table = ({ rowData }) => {

    const windowSize = useWindowSize();

    const defaultColDef = {
        resizable: true,
        sortable: true,
        filter: true,
    };

    const columnDefs = [
        { field: 'name' },
        { field: 'players' },
        { field: 'rating', headerName: 'User Rating (1-5)' },
        { field: 'rank' },
        { field: 'price', headerName: 'Price (USD)' },
    ];

    const onGridSizeChanged = (params, windowWidth) => {
        if (windowWidth.innerWidth > 880) {
            return params.sizeColumnsToFit();
        }
    };

    return (
        <div className='container-table'>
            <AgGridReact className="ag-theme-custom"
                rowData={rowData}
                columnDefs={columnDefs}
                animateRows={true}
                defaultColDef={defaultColDef}
                onFirstDataRendered={params => params.api.sizeColumnsToFit()}
                onGridSizeChanged={params => onGridSizeChanged(params.api, windowSize)}
            />
        </div>
    );
};

export default Table;