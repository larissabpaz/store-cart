import React, { useState } from 'react';
import { ButtonGroup, Button, Box } from '@mui/material';
import ProductsCard from './ProductsCard';

interface ProductsCardProps {
  id: number;
  name: string;
  price: number;
  img_url: string;
  description: string;
  category: string;
}

const categories = ['Lanches', 'Bebidas', 'Sobremesas'];

export default function ProductCatalog({ products }: { products: ProductsCardProps[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [, setOpen] = useState(false);
  const [, setSelectedProduct] = useState<ProductsCardProps | null>(null); // Estado para o produto selecionado

  const handleOpenModal = (product: ProductsCardProps) => {
    setSelectedProduct(product); 
    setOpen(true); 
  };

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <Box>
      <ButtonGroup>
        {categories.map((category) => (
          <Button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </Button>
        ))}
        <Button onClick={() => setSelectedCategory(null)}>Todos</Button>
      </ButtonGroup>

      <Box display="flex" gap={2} flexWrap="wrap">
        {filteredProducts.map((product) => (
          <ProductsCard key={product.id} {...product} onClick={() => handleOpenModal(product)}/>
        ))}
      </Box>
    </Box>
  );
}
