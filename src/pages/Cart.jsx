import { useCart } from "../app/hooks/useCart.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, remove, updateQuantity, totalItems, totalPrice } = useCart();
  const [terms, setTerms] = useState(false);
  const navigate = useNavigate();

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
    <div className="container py-5">
      <h6 className="fw-bold text-uppercase">Carrito de compra</h6>
      <hr />

      <div className="row g-4">

        {/* ITEMS */}
        <div className="col-lg-8">
          {cart.length === 0 ? (
            <div className="text-center mt-5">
              <i className="bi bi-cart-x" style={{ fontSize: "2rem" }}></i>
              <p className="mt-3">Tu carrito está vacío</p>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="card mb-3 shadow-sm border-0">
                <div className="card-body d-flex gap-3">

                  <img src={item.image} width="80" className="rounded" />

                  <div className="flex-grow-1">
                    <p className="small text-muted">{item.brand}</p>
                    <p className="fw-semibold">{item.name}</p>

                    <div className="d-flex justify-content-between mt-3">
                      <div>
                        <button onClick={() =>
                          item.quantity > 1
                            ? updateQuantity(item.id, item.quantity - 1)
                            : remove(item.id)
                        }>-</button>

                        <span className="mx-2">{item.quantity}</span>

                        <button onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }>+</button>
                      </div>

                      <span className="fw-bold">
                        ${item.price * item.quantity}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-2 text-end">
                  <button
                    className="btn btn-sm text-danger"
                    onClick={() => remove(item.id)}
                  >
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* SUMMARY */}
        <div className="col-lg-4">
          <div className="card shadow-sm p-3">

            <h6 className="fw-bold">Resumen</h6>

            <div className="d-flex justify-content-between">
              <span>Productos ({totalItems})</span>
              <span>${totalPrice}</span>
            </div>

            <div className="d-flex justify-content-between">
              <span>IVA</span>
              <span>${iva}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>${totalPrice + iva}</span>
            </div>

            <div className="form-check mt-3">
              <input
                type="checkbox"
                onChange={(e) => setTerms(e.target.checked)}
              />
              <label>Acepto términos</label>
            </div>

            <button
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