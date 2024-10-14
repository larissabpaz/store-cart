import { createContext, useContext, useState } from 'react';

type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
  observation?: string;
};

interface CartContextProps {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number, quantity?: number) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartShopProvider');
  return context;
};

export function CartShopProvider({ children }: any) {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existingProduct = prev.find(item => item.id === product.id);
      if (existingProduct) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
        );
      }
      return [...prev, product];
    });
  };

  const removeFromCart = (id: number, quantity: number = 1) => {
    setCart(prev => {
      const product = prev.find(item => item.id === id);
      if (product) {
        if (product.quantity > quantity) {
          return prev.map(item =>
            item.id === id ? { ...item, quantity: item.quantity - quantity } : item
          );
        } else {
          return prev.filter(item => item.id !== id);
        }
      }
      return prev;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
};
