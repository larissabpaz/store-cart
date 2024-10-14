import { Box, Typography, Button, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartShopContext";
import CartShop from "../components/CartShop";

export default function CartShopPage() {
    const { cart, total, clearCart } = useCart();
    const navigate = useNavigate();
  
    const handleCheckout = () => {
      console.log('Pedido enviado:', cart);
      clearCart();
      navigate('/pedido-confirmado');
    };
  
    return (
      <Box  display="flex" 
      justifyContent="center" 
      alignItems="center" 
      minHeight="100vh">
        <Paper elevation={3} sx={{ padding: 2, width: '80%', maxWidth: 600 }}>
        <CartShop /> 
        <Typography variant="h5" align="right" gutterBottom>
          Total da compra: R${total.toFixed(2)}
        </Typography>
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            onClick={handleCheckout}
            disabled={cart.length === 0}
          >
            Finalizar Pedido
          </Button>
        </Box>
        </Paper>
      </Box>
    );
};
