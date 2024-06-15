import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pokeData: []
}

export const pokeList = createSlice({
    name: 'pokeData',
    initialState,
    reducers: {
        setPokeList: (state, action) => {
            console.log("State Called")
            state.pokeData = action.payload
        },
    }
})

export const { setPokeList } = pokeList.actions;
export default pokeList.reducer;