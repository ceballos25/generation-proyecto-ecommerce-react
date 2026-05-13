import ProductCard from './ProductCard';
import { useProducts } from '../../hooks/useProduct.js';
import { useState } from 'react';

const ProductsSection = () => {
  const { products, loading } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    ...new Set(products.map(p => p.category))
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products.filter(p => p.isActive)
      : products.filter(p => p.category === selectedCategory && p.isActive);

  return (
    <section className="container-fluid px-4 px-md-5 stock-container" id="productos">

      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
        <h2 className="section-title mb-0">Productos</h2>

        <div className="filter-pills d-flex flex-wrap gap-2">

          <button
            className={`filter-pill ${selectedCategory === "all" ? "active" : ""}`}
            onClick={() => setSelectedCategory("all")}
          >
            Todos
          </button>

          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-pill ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}

        </div>
      </div>

      {loading && (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="col">
              <div className="card product-card skeleton"></div>
            </div>
          ))}
        </div>
      )}

      {!loading && (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {!loading && filteredProducts.length === 0 && (
        <div className="empty-state text-center mt-5">
          <i className="bi bi-box-seam"></i>
          <p>No hay productos en esta categoría.</p>
        </div>
      )}

    </section>
  );
};

export default ProductsSection;