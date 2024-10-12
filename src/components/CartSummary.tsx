import { Paper, Typography } from '@mui/material';
import { useCart } from '../context/CartShopContext';

export default function CartSummary() {
  const { total, cart } = useCart();

  return (
    <Paper style={{ position: 'fixed', bottom: 0, width: '100%', padding: '10px' }}>
      <Typography>Total: ${total}</Typography>
      <Typography>Items in cart: {cart.length}</Typography>
    </Paper>
  );
};

