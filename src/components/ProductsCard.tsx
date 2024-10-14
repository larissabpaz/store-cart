import { Box, Card, CardHeader, CardMedia, IconButton, Tooltip } from '@mui/material';
import { useCart } from '../context/CartShopContext';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';

interface ProductsCardProps {
  id: number;
  name: string;
  price: number;
  img_url: string;
  description: string;
  onClick: () => void;
}

export default function ProductsCard({ id, name, price, img_url, onClick }: ProductsCardProps) {
  const { addToCart } = useCart();  

  const handleAddToCart = () => {
    const product = { id, name, price, quantity: 1 };  
    addToCart(product);  
  };

  return (
    <Box display="flex" gap={2} justifyContent="flex-start" flexWrap="wrap">
      <Card 
      key={id}
      sx={{ width: 250, position: 'relative', padding: '1rem', margin: "5%" }}
      onClick={onClick}   
      >
        <CardMedia
          component="img"
          height="194"
          image={img_url}
          alt={name}
        />
        <CardHeader
          title={name}
          subheader={`R$ ${price}`}
          action={
            <Tooltip title="Adicionar ao Carrinho">
            <IconButton color="primary" onClick={handleAddToCart}>
            <AddShoppingCartSharpIcon />
            </IconButton>
            </Tooltip>
          }
        />
      </Card>
    </Box>
  );
}
