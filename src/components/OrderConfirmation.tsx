import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function OrderConfirmation() {
  const navigate = useNavigate();

  const handleReturnToCatalog = () => {
    navigate('/'); 
  };

  return (
    <Box textAlign="center" padding={4}>
      <Typography variant="h4" gutterBottom>
        Pedido Confirmado!
      </Typography>
      <Typography variant="body1" >
        Seu pedido foi realizado com sucesso. Em breve você receberá a confirmação no seu e-mail.
      </Typography>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleReturnToCatalog}
      >
        Voltar as compras
      </Button>
    </Box>
  );
};
