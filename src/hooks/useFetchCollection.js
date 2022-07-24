import { useState, useEffect } from 'react';
import apiServices from '../services/boardgameatlas';

export const useFetchCollection = () => {

    const [collection, setCollection] = useState([]);
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
        apiServices.getAll()
            .then(bgCollection => {
                setCollection(bgCollection.map(boardgame => tableModel(boardgame)));
            });
    }, []);

    return collection;
};

