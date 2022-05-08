import React from 'react'
import { Button, IconButton, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/styles';
import { useState } from 'react';
//icons
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const BasicFilterContainer = styled('div')((({
  marginLeft: 'auto',
  width: 'max-content',
  padding: 10,
  display: 'flex',
  gridGap: 10
})));


const BasicFilter = () => {
  const [basicFilterElement, setBasicFilterElement] = useState<HTMLElement | null>(null);

  const closeBasicFilterMenu = () => {
    setBasicFilterElement(null);
  }
  return (
    <BasicFilterContainer>
      <div>
        <Button
          onClick={(e) => setBasicFilterElement(e.currentTarget)}
        >
          Dashboard
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={basicFilterElement}
          open={basicFilterElement !== null}
          onClose={closeBasicFilterMenu}
        >
          {['name', 'date'].map((_option) => (
            <MenuItem
              key={_option}
              onClick={() => {
                closeBasicFilterMenu()
              }}
            >Profile</MenuItem>
          ))}
        </Menu>
      </div>
      <IconButton>
        <ArrowUpwardIcon />
      </IconButton>
    </BasicFilterContainer>
  )
}

export default BasicFilter