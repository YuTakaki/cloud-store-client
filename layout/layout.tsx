import React from 'react'
import { AppBar, Box, Button, Drawer, List, ListItem, Theme } from '@mui/material';
import { styled } from '@mui/styles';
import theme from '../src/theme';
import SearchContainer from '../components/layout/SearchContainer';

interface LayoutProps {
  children : any
}

const drawerWidth = 250;

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
    padding: 10,
    width: drawerWidth,
    backgroundColor: theme.palette.primary.main,
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
        theme={theme}
      >
        <List>
          {[1,2,3,4,5,6,7].map(_option => (
            <ListItem key={_option}>
              <Button
                sx={{
                  color: 'white'
                }}
              >
                {_option}
              </Button>
            </ListItem>
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