import axios from 'axios';
const URL = `https://api.boardgameatlas.com/api/search?list_id=mGkyiPhujf&client_id=${process.env.REACT_APP_CLIENT_ID}`;

const getAll = async () => {
    const response = await axios.get(URL);
    return response.data;
};

export default { getAll };