import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Catalog from './pages/Catalog';
import { CartShopProvider } from './context/CartShopContext';
import CartShopPage from './pages/CartShopPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ConfirmationPage from './pages/ConfirmationPage';
import AppNavBar from './components/AppNavBar';

export default function App() {
  return (
    <CartShopProvider>
      <Router>
      <AppNavBar />
        <Routes>
          <Route path="/" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/carrinho" element={<CartShopPage />} />
          <Route path="/pedido-confirmado" element={<ConfirmationPage />} />
        </Routes>
      </Router>
    </CartShopProvider>
  );
};
