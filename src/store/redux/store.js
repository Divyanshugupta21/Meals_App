import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favoritesReducer";

const store = configureStore({
    reducer: {
        favoriteMeals: favoritesReducer,
    },
});

export default store;