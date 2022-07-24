import Table from '../components/Table';
import './List.scss';


const List = ({ rowData }) => {



    return (
        <div className="container-list">
            <h1 className='list-title--h1'>Natanael's Collection</h1>
            <Table rowData={rowData} />
        </div>
    );
};

export default List;