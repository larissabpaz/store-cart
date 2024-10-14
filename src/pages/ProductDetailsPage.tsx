import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { Box, Typography, Button, TextField, InputAdornment } from '@mui/material';
import { useCart } from '../context/CartShopContext';

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  img_url: string;
}

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null); 
  const [quantity, setQuantity] = useState(1);
  const [observation, setObservation] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
      .then((response: AxiosResponse<Product>) => {
        setProduct(response.data); 
      })
      .catch((error: unknown) => {
        console.error('Erro ao buscar produto', error);
      });
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        observation,
      });
      navigate('/cart');
    }
  };

  if (!product) {
    return <Typography>Carregando produto...</Typography>;
  }

  return (
    <Box padding={2}>
      <Typography variant="h4" gutterBottom>{product.name}</Typography>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <img src={product.img_url} alt={product.name} style={{ width: '300px', height: '300px' }} />
      </Box>
      <Typography variant="body1">{product.description}</Typography>
      <Typography variant="h5">R${product.price.toFixed(2)}</Typography>

      <TextField
        label="Quantidade"
        type="number"
        value={quantity}
        onChange={e => setQuantity(Number(e.target.value))}
        InputProps={{
          inputProps: { min: 1 },
          endAdornment: <InputAdornment position="end">un.</InputAdornment>,
        }}
        style={{ marginTop: '10px', marginBottom: '10px' }}
        fullWidth
      />

      <TextField
        label="Observações"
        value={observation}
        onChange={e => setObservation(e.target.value)}
        multiline
        rows={3}
        fullWidth
        variant="outlined"
        style={{ marginBottom: '20px' }}
      />

      <Button
        variant="contained"
        color="primary"
        onClick={handleAddToCart}
        fullWidth
      >
        Adicionar ao Carrinho
      </Button>
    </Box>
  );
};
