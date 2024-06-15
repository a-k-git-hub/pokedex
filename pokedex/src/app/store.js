import { configureStore } from "@reduxjs/toolkit";
import pokeData from '../features/pokeList';


export const store = configureStore({
    reducer: {
        data: pokeData,
    }
})