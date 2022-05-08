import React from 'react'
import { AppBar, Box, Drawer, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import { styled } from '@mui/styles';

interface LayoutProps {
  children : any
}

const drawerWidth = 250;

const Main = styled("main")((({
  padding: 10,
  paddingTop: 50,
  marginLeft: drawerWidth
})))

const CustomDrawer = styled(Drawer)((({
  '& .MuiDrawer-paper' : {
    padding: 10,
    width: drawerWidth,
  }
})))

const Layout = ({children} : LayoutProps) => {
  return (
    <Box>
      <CustomDrawer
        variant='permanent'
        sx={{
          width: drawerWidth
        }}
      >
        <List>
          {[1,2,3,4,5, 6].map(_option => (
            <ListItem key={_option}>
              <ListItemText>{_option}</ListItemText>
            </ListItem>
          ))}
        </List>
      </CustomDrawer>
      <AppBar>
        <Box
          sx={{
            marginLeft: `${drawerWidth}px`,
            padding: 1
          }}
        >
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