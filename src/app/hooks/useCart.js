// El carrito vive en CartProvider; aquí solo reexportamos el hook para que NavBar, Cart y ProductCard compartan el mismo estado (si no, el badge no se actualiza).
export { useCart } from "./context/CartContext.jsx";
