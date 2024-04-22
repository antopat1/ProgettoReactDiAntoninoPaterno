import { createSlice } from "@reduxjs/toolkit";

export const searchBarSlice = createSlice({
  name: "searchBar", 
  initialState: {
    searchData: "", // Stato iniziale con un campo per i dati di ricerca
  },
  reducers: {
    change: (state, action) => { // Reducer per modificare lo stato `searchData`
      state.searchData = action.payload; // Aggiorna il valore dello stato `searchData` con il payload dell'azione
    },
  },
});

export const { change } = searchBarSlice.actions; 

export default searchBarSlice.reducer; 
