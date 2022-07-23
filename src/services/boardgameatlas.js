import axios from 'axios';
const baseURL = 'https://api.boardgameatlas.com/api/search?list_id=mGkyiPhujf&client_id=LyaEENTwYO';

const getAll = () => {
    return axios
        .get(baseURL)
        .then(response => response.data);
};

export default { getAll };