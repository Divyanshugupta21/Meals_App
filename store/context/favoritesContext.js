import { createContext } from "react";
import { useState } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);
    const addFavorite = (id) => {
        console.log('Adding favorite with id:', id);
        setFavoriteMealIds((prevIds) => [...prevIds, id]);
    };
    const removeFavorite = (id) => {
        console.log('Removing favorite with id:', id);
        setFavoriteMealIds((prevIds) => prevIds.filter((mealId) => mealId !== id));
    };

    const contextValue = {
        ids: favoriteMealIds,
        addFavorite : addFavorite,
        removeFavorite : removeFavorite,
    };

    return (
        <FavoritesContext.Provider value={contextValue}>
            {children}
        </FavoritesContext.Provider>
    );
}

export default FavoritesContextProvider;