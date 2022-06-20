import { createSlice } from "@reduxjs/toolkit";
import { fileType } from "../../types/types"


const initialState : fileType[] = [];
const filesSlicer = createSlice({
  name: 'files',
  initialState,
  reducers:{},
  extraReducers:{}
});

export const {

} = filesSlicer.actions

export const fileReducer = filesSlicer.reducer;