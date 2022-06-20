import { configureStore } from "@reduxjs/toolkit";
import { fileReducer } from './slicers/filesSlicer'
export const store = configureStore({
  reducer : {
    fileReducer
  }
})