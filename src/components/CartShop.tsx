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

  const handleQuantityChange = (id: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    const updatedProduct = cart.find(item => item.id === id);
    if (updatedProduct) {
      const newProduct = { ...updatedProduct, quantity };
      removeFromCart(id);
      addToCart(newProduct);
    }
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Carrinho de Compras
      </Typography>
      <List>
        {cart.map(item => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Preço unitário: R$${item.price.toFixed(2)}`}
            />
            <TextField
              type="number"
              label="Quantidade"
              value={item.quantity}
              onChange={e => handleQuantityChange(item.id, parseInt(e.target.value))}
              //InputProps={{ inputProps: { min: 0 } }}
              style={{ width: '100px', marginRight: '10px' }}
            />
            <Typography variant="body1">
              Total: R${(item.price * item.quantity).toFixed(2)}
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
