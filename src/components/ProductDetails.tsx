import { Box, Typography } from '@mui/material';

interface ProductDetailsProps {
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}

export default function ProductDetails ({ name, price, description, imageUrl }: ProductDetailsProps) {
  return (
    <Box padding={2}>
      <Typography variant="h5" gutterBottom>{name}</Typography>
      <Box display="flex" justifyContent="center" marginBottom={2}>
        <img src={imageUrl} alt={name} style={{ width: '100%', maxWidth: '300px', height: 'auto' }} />
      </Box>
      <Typography variant="body2">{description}</Typography>
      <Typography variant="h6">R$ {price.toFixed(2)}</Typography>
    </Box>
  );
};
