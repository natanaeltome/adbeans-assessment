import { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './Table.scss';

const Table = ({ rowData }) => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    const defaultColDef = {
        resizable: true,
        sortable: true,
        filter: true,
    };

    const columnDefs = [
        { field: 'name' },
        { field: 'players' },
        { field: 'rating' },
        { field: 'rank' },
        { field: 'price' },
    ];

    const onGridSizeChanged = (params, windowWidth) => {
        if (windowWidth > 880) {
            return params.sizeColumnsToFit();
        }
    };

    return (
        <div className='container-table'>
            <AgGridReact className="ag-theme-custom"
                rowData={rowData} // Row Data for Rows
                columnDefs={columnDefs} // Column Defs for Columns
                animateRows={true} // Optional - set to 'true' to have rows animate when sorted
                defaultColDef={defaultColDef}
                onFirstDataRendered={params => params.api.sizeColumnsToFit()}
                onGridSizeChanged={params => onGridSizeChanged(params.api, windowSize.innerWidth)}
            />
        </div>
    );
};

export default Table;