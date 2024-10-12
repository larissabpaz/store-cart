import { Box, Typography, Button } from "@mui/material";
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
      <Box padding={2}>
        <CartShop />
        <Typography variant="h5" align="right" gutterBottom>
          Total Geral: R${total.toFixed(2)}
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
      </Box>
    );
};
