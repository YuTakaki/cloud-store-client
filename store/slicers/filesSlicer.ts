import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fileType } from "../../types/types"
import { uploadFilesAction } from "../actions/filesAction";

type filesSlicerinititalType = {
  isLoading : boolean
  files : fileType[]

}
const initialState = {
  isLoading : false,
  files : []
}
const filesSlicer = createSlice({
  name: 'files',
  initialState,
  reducers:{
    setFiles : (state, action) => {
      state.files = action.payload
      return 
    }
  },
  extraReducers:(builder) => {
    builder.addCase(uploadFilesAction.pending, (state : filesSlicerinititalType, _) => {
      state.isLoading = true;
    })

    builder.addCase(uploadFilesAction.fulfilled, (state : filesSlicerinititalType, action : PayloadAction<any>) => {
      state.isLoading = false;
      state.files = action.payload;
    })

    builder.addCase(uploadFilesAction.rejected, (state : filesSlicerinititalType, _) => {
      state.isLoading = false;
    })

  }
});

export const {
  setFiles
} = filesSlicer.actions

export const fileReducer = filesSlicer.reducer;