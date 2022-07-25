import { useState, useEffect } from 'react';
import apiServices from '../services/boardgameatlas';

export const useFetchCollection = () => {

    const [collection, setCollection] = useState(null);
    const [error, setError] = useState(null);

    const tableModel = (boardgame) => {
        return {
            name: boardgame.name,
            players: boardgame.players,
            rating: boardgame.average_user_rating.toFixed(2),
            rank: boardgame.rank,
            price: boardgame.price
        };
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bgCollection = await apiServices.getAll();
                setCollection(bgCollection.games.map(boardgame => tableModel(boardgame)));
            }
            catch (err) {
                setError(err);
            }
        };
        fetchData();
    }, []);

    return { collection, error };
};

