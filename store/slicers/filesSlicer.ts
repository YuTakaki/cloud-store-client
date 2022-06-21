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
    setFiles : (state : filesSlicerinititalType, action : PayloadAction<any>) => {
      state.files = action.payload
    }
  },
  extraReducers:(builder) => {
    builder.addCase(uploadFilesAction.pending, (state : filesSlicerinititalType, _) => {
      state.isLoading = true;
    })

    builder.addCase(uploadFilesAction.fulfilled, (state : filesSlicerinititalType, action : PayloadAction<any>) => {
      state.isLoading = false;
      console.log(action.payload)
      state.files = [...state.files, ...action.payload.files]
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