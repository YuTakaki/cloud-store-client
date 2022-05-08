import React from 'react'
import { AppBar, Box, Drawer, List, ListItem, ListItemText, TextField } from '@mui/material';
import { styled } from '@mui/styles';
import { NextPage } from 'next'

interface LayoutProps {
  children : any
}

const Main = styled("main")((({
  padding: 10
})))

const Layout = ({children} : LayoutProps) => {
  return (
    <Box>
      <Drawer
        variant='permanent'
      >
        <List>
          {[1,2,3,4,5].map(_option => (
            <ListItem key={_option}>
              <ListItemText>{_option}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <AppBar>
        <Box>
          <TextField></TextField>
        </Box>
      </AppBar>
      <Main>
        {children}
      </Main>

    </Box>
  )
}

export default Layout