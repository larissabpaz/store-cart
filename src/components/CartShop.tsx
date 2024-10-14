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
  const { cart, removeFromCart } = useCart();

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
            <TextField
              label="Quantidade"
              type="number"
              value={item.quantity}
              sx={{ width: 80, marginRight: 2 }}
            />
            <Typography variant="body1">
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
};
