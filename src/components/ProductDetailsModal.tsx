import { Modal, Box, Button, Typography, CardMedia, IconButton, Tooltip } from '@mui/material';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
import { useCart } from '../context/CartShopContext';

interface Product {
    id: number;
    name: string;
    price: number;
    img_url: string;
    description: string;
    category: string;
}

interface ProductDetailsModalProps {
    product?: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProductDetailsModal({ product, isOpen, onClose }: ProductDetailsModalProps) {
    const { addToCart } = useCart();

    const handleAddToCart = () => {
        if (product) {
            const productToAdd = {
                id: product.id,
                name: product.name,
                price: product.price,
                quantity: 1,
                observation: '',
            };
            addToCart(productToAdd);
        }
    };

    if (!product) return null;

    return (
        <Modal open={isOpen}>
            <Box sx={{ width: 400, bgcolor: 'background.paper', margin: '10% auto', padding: 2 }}>
                <Typography variant="h5" gutterBottom>{product.name}</Typography>
                <CardMedia
                    component="img"
                    height="200"
                    image={product.img_url}
                    alt={product.name}
                />
                <Typography variant="body1" sx={{ marginY: 2 }}>
                    {product.description}
                </Typography>
                <Typography variant="h6">Preço: R$ {product.price.toFixed(2)}</Typography>
                <Tooltip title="Adicionar ao Carrinho">
                    <IconButton color="primary" onClick={handleAddToCart}>
                        <AddShoppingCartSharpIcon />
                    </IconButton>
                </Tooltip>
                <Button variant="contained" color="primary" onClick={onClose} fullWidth>
                    Fechar
                </Button>
            </Box>
        </Modal>
    );
}