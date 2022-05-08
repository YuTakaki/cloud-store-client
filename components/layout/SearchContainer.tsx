import React, { useState } from 'react'
import { styled } from '@mui/styles';
import theme from '../../src/theme';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton, TextField, Theme } from '@mui/material';

interface SearchContainerProps {
  drawerWidth: number
}
const SearchBox = styled(Box)((({theme, drawerWidth} : {theme : Theme, drawerWidth: number}) => ({
  backgroundColor: theme.palette.grey[100],
  margin: 'auto',
  width: '40%',
  borderRadius: '7px',
  marginLeft: `${drawerWidth}px`,
  padding: '3px 7px',
  display: 'flex',
  alignItems: 'center'
})));


const SearchContainer = ({ drawerWidth } : SearchContainerProps) => {

  const [search, setSearch] = useState('');
  
  return (
    <SearchBox
      theme={theme}
      drawerWidth={drawerWidth}
    >
      <IconButton>
        <SearchIcon />
      </IconButton>
      <TextField
        variant='standard'
        fullWidth
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          disableUnderline: true,
        }}
      />
      {search && (
        <IconButton
          onClick={() => setSearch('')}
        >
          <CloseIcon />
        </IconButton>
      )}
    </SearchBox>
  )
}

export default SearchContainer