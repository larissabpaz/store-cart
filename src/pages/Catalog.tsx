import { useEffect, useState } from 'react';
import ProductsCard from '../components/ProductsCard';

export default function Catalog() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      {products.map(product => (
        <ProductsCard key={product.id} {...product} />
      ))}
    </>
  );
};
