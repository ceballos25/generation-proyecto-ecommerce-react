import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createRoot } from 'react-dom/client';
import './app/ui/styles/reset.css';
import { App } from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import { CartProvider } from './app/hooks/context/CartContext.jsx';

// createRoot: conecta React con el <div id="root"> del index.html (es el arranque de la app en pantalla)
createRoot(document.getElementById('root')).render(
  // BrowserRouter: las rutas /about, /cart, etc. cambian la vista sin recargar todo el sitio
  <BrowserRouter>
    {/* CartProvider: deja listo el carrito desde el inisio */}
    <CartProvider>
      <App />
    </CartProvider>
  </BrowserRouter>
);
