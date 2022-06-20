import { createSlice } from "@reduxjs/toolkit";
import { fileType } from "../../types/types"


const initialState : fileType[] = [];
const filesSlicer = createSlice({
  name: 'files',
  initialState,
  reducers:{
    setFiles : (_, action) => {
      return action.payload
    }
  },
  extraReducers:{}
});

export const {
  setFiles
} = filesSlicer.actions

export const fileReducer = filesSlicer.reducer;