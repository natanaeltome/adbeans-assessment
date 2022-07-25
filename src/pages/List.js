import Table from '../components/Table';
import './List.scss';

const List = ({ rowData, error }) => {
    const getListItems = () => {
        if (rowData) {
            return (
                <Table rowData={rowData} />
            );
        } else {
            return (
                <div>
                    <i className="fas fa-spinner fa-spin"></i>
                    Results are loading...
                </div>
            );
        }
    };

    const getErrorMessage = () => {
        return (
            <div>Error loading data. Please refresh page to try again.</div>
        );
    };

    return (
        <div className="container-list">
            <h1 className='list-title--h1'>Natanael's Collection</h1>
            {error ?
                getErrorMessage() : getListItems()
            }
        </div>
    );
};

export default List;