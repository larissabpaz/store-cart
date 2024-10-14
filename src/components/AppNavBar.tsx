import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, createTheme, Drawer, List, ListItem, ListItemText, Switch, ThemeProvider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartShopContext';
import { useState } from 'react';


export default function AppNavBar() {
    const navigate = useNavigate();
    const { cart } = useCart();
    const [darkMode, setDarkMode] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
    };
  
    const theme = createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
      },
    });
  
    const toggleDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Box>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer}
              >
                <MenuIcon />
              </IconButton>
  
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Burguer BH
              </Typography>
  
              <IconButton color="inherit" onClick={() => navigate('/carrinho')}>
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
  
              <Switch checked={darkMode} onChange={toggleDarkMode} />
            </Toolbar>
          </AppBar>
  
          <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
            <List>
              <ListItem onClick={() => { navigate('/'); toggleDrawer(); }}>
                <ListItemText primary="Catálogo" />
              </ListItem>
              <IconButton color="inherit" onClick={() => navigate('/carrinho')}>
                <Badge badgeContent={cart.length} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </List>
          </Drawer>
        </Box>
      </ThemeProvider>
    );
}