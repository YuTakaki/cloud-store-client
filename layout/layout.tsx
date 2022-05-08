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
  padding: 10,
  paddingTop: 50,
  marginLeft: drawerWidth
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
      <AppBar
        color='transparent'
        elevation={0}
        sx={{
          padding: 1
        }}
      >
        <Box
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: 'auto'
          }}
        >
          <SearchContainer drawerWidth={drawerWidth} />

        </Box>
      </AppBar>
      <Main>
        {children}
      </Main>

    </Box>
  )
}

export default Layout