import React from 'react'
import { AppBar, Avatar, Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Theme } from '@mui/material';
import { styled } from '@mui/styles';
import theme from '../src/theme';
import SearchContainer from '../components/layout/SearchContainer';

interface LayoutProps {
  children : any
}

const drawerWidth = 260;

const Main = styled("main")((({
  padding: 20,
  paddingTop: 80,
  marginLeft: drawerWidth
})))

const CustomAppBar = styled(AppBar)((({theme} : {theme : Theme}) => ({
  padding: 10,
  borderBottom: `1px solid ${theme.palette.grey[100]}`,
  backgroundColor: 'white'
})))


const CustomDrawer = styled(Drawer)((({theme} : {theme : Theme}) => ({
  '& .MuiDrawer-paper' : {
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
  }
})))

const Layout = ({children} : LayoutProps) => {

  const nav_options = [
    'All',
    'Images',
    'Videos',
    'Music',
    'Documents',
  ]

  return (
    <Box>
      <CustomDrawer
        variant='permanent'
        sx={{
          width: drawerWidth
        }}
        theme={theme}
      >
        <Avatar
          alt="user"
          sx={{
            minWidth: '100px',
            minHeight: '100px',
            margin: '20px auto'
          }}
        />
        <Button
          variant="contained"
          color="secondary"
          sx={{
            margin: 2
          }}
        >
          Add
        </Button>
        <List>
          {nav_options.map(_option => (
            <ListItemButton key={_option}>
              {/* <ListItemIcon>
              </ListItemIcon> */}
              <ListItemText primary={_option} sx={{color: 'white'}}/>
            </ListItemButton>
          ))}
        </List>
      </CustomDrawer>
      <CustomAppBar
        elevation={0}
        theme={theme}
      >
        <Box
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: 'auto'
          }}
        >
          <SearchContainer drawerWidth={drawerWidth} />

        </Box>
      </CustomAppBar>
      <Main>
        {children}
      </Main>

    </Box>
  )
}

export default Layout