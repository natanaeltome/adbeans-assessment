import Table from '../components/Table';
import './List.scss';


const List = ({ rowData }) => {



    return (
        <div className="container">
            <h2>Natanael's Collection</h2>
            <Table rowData={rowData} />
        </div>
    );
};

export default List;