import { Link } from 'react-router-dom';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

interface ProductsCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ProductsCard ({ id, name, price, image }: ProductsCardProps) {
  return (
    <Card sx={{width: '12%', margin: '5%'}}>
      <CardMedia component="img" image={image} alt={name} sx={{width: '80%'}} />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">${price}</Typography>
        <Link to={`/product/${id}`}>View Details</Link>
      </CardContent>
    </Card>
  );
};

