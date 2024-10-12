import { Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ConfirmationPage() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <Box padding={2} textAlign="center">
      <Typography variant="h4" gutterBottom>
        Pedido Confirmado!
      </Typography>
      <Typography variant="body1" gutterBottom>
        Obrigado por sua compra. Seu pedido foi realizado com sucesso.
      </Typography>
      <Button variant="contained" color="primary" onClick={handleGoHome}>
        Voltar as compras
      </Button>
    </Box>
  );
};
