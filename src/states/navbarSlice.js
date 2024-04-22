import { createSlice } from "@reduxjs/toolkit";

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: {
    navIsOpen: false, // Stato iniziale della navbar
  },
  reducers: {
    openNavbar: (state) => {
      state.navIsOpen = true;
    },
    closeNavbar: (state) => {
      state.navIsOpen = false;
    },
  },
});

export const { openNavbar, closeNavbar } = navbarSlice.actions;

export default navbarSlice.reducer;