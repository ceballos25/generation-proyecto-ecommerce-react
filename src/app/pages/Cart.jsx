import { useCart } from "../hooks/useCart";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { formatPrice } from "../services/utils.service";
import "../ui/styles/cart.css";

const Cart = () => {
  const { cart, remove, updateQuantity, getTotalItems, getTotalPrice } = useCart();

  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();

  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  const iva = totalPrice * 0.19;

  const handleCheckout = () => {
    if (cart.length === 0) {
      Swal.fire("Carrito vacío", "Agrega productos antes de continuar", "warning");
      return;
    }

    if (!terms) {
      Swal.fire("Acepta términos", "Debes aceptar los términos", "warning");
      return;
    }

    navigate("/checkout");
  };

  return (
    <div className="container py-5 cart-page">
      <h6 className="fw-bold text-uppercase">Carrito de compra</h6>
      <hr />

      <div className="row g-4">
        <div className="col-lg-8">
          {cart.length === 0 ? (
            <div className="text-center mt-5">
              <i className="bi bi-cart-x" style={{ fontSize: "2rem" }}></i>
              <p className="mt-3">Tu carrito está vacío</p>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="card mb-3 shadow-sm border-0">
                <div className="card-body d-flex gap-3">
                  <img
                    src={item.image}
                    width="80"
                    height="80"
                    className="rounded object-fit-cover"
                    alt=""
                  />

                  <div className="flex-grow-1">
                    <p className="small text-muted mb-1">{item.brand}</p>
                    <p className="fw-semibold mb-0">{item.name}</p>

                    <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mt-3">
                      <div className="cart-qty" role="group" aria-label="Cantidad">
                        <button
                          type="button"
                          className="cart-qty-btn"
                          aria-label="Quitar una unidad"
                          onClick={() =>
                            item.quantity > 1
                              ? updateQuantity(item.id, item.quantity - 1)
                              : remove(item.id)
                          }
                        >
                          −
                        </button>
                        <span className="cart-qty-value">{item.quantity}</span>
                        <button
                          type="button"
                          className="cart-qty-btn"
                          aria-label="Añadir una unidad"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>

                      <span className="fw-bold text-secondary">
                        {formatPrice(
                          (Number(item.price) || 0) * (Number(item.quantity) || 0)
                        )}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="px-3 pb-3 text-end">
                  <button
                    type="button"
                    className="btn cart-remove-btn"
                    aria-label="Eliminar producto del carrito"
                    onClick={() => remove(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm p-3">
            <h6 className="fw-bold">Resumen</h6>

            <div className="d-flex justify-content-between">
              <span>Productos ({totalItems})</span>
              <span>{formatPrice(totalPrice)}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>IVA</span>
              <span>{formatPrice(iva)}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>{formatPrice(totalPrice + iva)}</span>
            </div>

            <div className="form-check mt-3">
              <input
                id="cart-terms"
                className="form-check-input"
                type="checkbox"
                onChange={(e) => setTerms(e.target.checked)}
              />
              <label className="form-check-label" htmlFor="cart-terms">
                Acepto términos
              </label>
            </div>

            <button
              type="button"
              className="btn btn-primary w-100 mt-3"
              onClick={handleCheckout}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
