import { createAsyncThunk } from "@reduxjs/toolkit";
import { fileType } from "../../types/types";
import { post } from "../../utils/requests";

export const uploadFilesAction = createAsyncThunk(
  'files/uploadFilesAction',
  async({files, currentOption} : {files : FormData, currentOption: string}) => {
    try {
      const uploadFiles = await  post('/api/upload', files)
      const newFiles = uploadFiles.data.files;
      console.log(currentOption)
      console.log(newFiles)
      return {
        files : currentOption === 'all' ? 
          newFiles : newFiles.filter((file : fileType) => 
                    file.contentType.includes(currentOption))
      }
      
    } catch (error) {
      console.log(error)
      return {}
      
    }
  }
)