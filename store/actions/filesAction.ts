import { createAsyncThunk } from "@reduxjs/toolkit";
import { post } from "../../utils/requests";

export const uploadFilesAction = createAsyncThunk(
  'files/uploadFilesAction',
  async(files : FormData) => {
    try {
      console.log(files.get('files'))
      const uploadFiles = await  post('/api/upload', files)
      console.log(uploadFiles.data)
      return {}
      
    } catch (error) {
      console.log(error)
      return {}
      
    }
  }
)