import { formatPrice } from '../../services/utils.service';
// import { cartService } from '../../services/cartSevices';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

//   const handleAddToCart = (e) => {
//     e.stopPropagation();
//     cartService.add(product);
//   };

  return (
    <div className="col" data-category={product.category}>
      <div className="card product-card h-100" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
        <img
          src={product.image}
          className="card-img-top"
          alt={product.name}
          loading="lazy"
        />
        <div className="card-body">
          <span className="card-category">{product.category}</span>
          <h5 className="card-title">{product.name}</h5>
          <p className="card-description">{product.description}</p>
          <div className="card-footer-custom">
            <span className="card-price">{formatPrice(product.price)}</span>
            <button
              className="btn-add-cart"
              aria-label="Agregar al carrito"
            //   onClick={handleAddToCart}
            >
              <i className="bi bi-cart-plus"></i> Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;