import Table from '../components/Table';
import './List.scss';

const List = ({ rowData }) => {

    const getListItems = () => {
        if (rowData) {
            return (
                <Table rowData={rowData} />
            );
        } else {
            return (
                <div>
                    <i class="fas fa-spinner fa-spin"></i>
                    Results are loading...
                </div>
            );
        }
    };

    return (
        <div className="container-list">
            <h1 className='list-title--h1'>Natanael's Collection</h1>
            {getListItems()}
        </div>
    );
};

export default List;