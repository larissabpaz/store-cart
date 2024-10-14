import { useEffect, useState } from 'react';
import ProductsCard from '../components/ProductsCard';
import { Box } from '@mui/material';
import ProductDetailsModal from '../components/ProductDetailsModal';

interface Product {
  id: number;
  name: string;
  price: number;
  img_url: string;
  description: string;
  category: string;
}

export default function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleOpenModal = (product: Product) => {
      setSelectedProduct(product);
      setOpen(true);
  };

  const handleCloseModal = () => {
      setSelectedProduct(null);
      setOpen(false);
  };

  useEffect(() => {
      fetch('http://localhost:5000/products')
          .then(res => res.json())
          .then(data => setProducts(data))
          .catch(error => console.error('Error fetching products:', error)); // Adicionando tratamento de erro
  }, []);

  return (
      <>
          <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
              {products.map(product => (
                  <ProductsCard key={product.id} {...product} onClick={() => handleOpenModal(product)} />
              ))}
              <ProductDetailsModal
                  isOpen={open}
                  onClose={handleCloseModal}
                  product={selectedProduct}
              />
          </Box>
      </>
  );
}
