import { configureStore } from "@reduxjs/toolkit";
import sectionMenuReducer from "./sectionMenuSlice";
import searchBarReducer from "./searchBarSlice";
import searchBarShownReducer from "./searchBarShownSlice";
import navbarSliceStateReducer from "./navbarSlice"


export default configureStore({
  reducer: {
    sectionMenuState: sectionMenuReducer,
    searchBarState: searchBarReducer,
    searchBarShownState: searchBarShownReducer,
    navbarSliceState:navbarSliceStateReducer,
  },
});
