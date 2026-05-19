import { formatPrice } from "../../../../services/utils.service";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../../hooks/useCart";
import Swal from "sweetalert2";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { add } = useCart();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    add(product);

    Swal.fire({
      icon: "success",
      title: "Agregado al carrito",
      text: product.name,
      timer: 1200,
      showConfirmButton: false,
      position: "top-end",
      toast: true,
    });
  };

  return (
    <div className="col">
      <div
        className="card product-card h-100"
        onClick={handleCardClick}
        style={{ cursor: "pointer" }}
      >
        <img src={product.image} className="card-img-top" alt={product.name} />

        <div className="card-body">
          <span>{product.category}</span>
          <h5>{product.name}</h5>
          <p>{product.description}</p>

          <div className="d-flex justify-content-between">
            <span>{formatPrice(product.price)}</span>

            <button className="btn-add-cart" onClick={handleAddToCart}>
              <i className="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
