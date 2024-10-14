import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  TextField,
  Box,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { useCart } from '../context/CartShopContext';

export default function CartShop() {
  const { cart, removeFromCart, addToCart } = useCart();

  const handleIncrement = (item: any) => {
    addToCart({ ...item, quantity: 1 });
  };

  const handleDecrement = (item: any) => {
    if (item.quantity > 1) {
      addToCart({ ...item, quantity: -1 }); 
    } else {
      removeFromCart(item.id); 
    }
  };

  return (
    <Box padding={2}>
      <Typography variant="h4" gutterBottom>Carrinho de Compras</Typography>
      <List>
        {cart.map(item => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`R$ ${item.price.toFixed(2)} cada`}
            />
            <Box display="flex" alignItems="center">
              <IconButton onClick={() => handleDecrement(item)} color="primary">
                -
              </IconButton>
              <Typography variant="body1" sx={{ mx: 1 }}>
                {item.quantity}
              </Typography>
              <IconButton onClick={() => handleIncrement(item)} color="primary">
                +
              </IconButton>
            </Box>
            <Typography variant="body1" sx={{ marginLeft: 2 }}>
              Total: R$ {(item.price * item.quantity).toFixed(2)}
            </Typography>
            <IconButton onClick={() => removeFromCart(item.id)} color="secondary">
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}