import "../../styles/components/home/HeroSection.css";
const HeroSection = () => {
  return (
    <section
      className="hero-section position-relative overflow-hidden"
      id="hero-section"
    >
      <div className="hero-dots-pattern"></div>
      <div className="hero-diagonal-line"></div>

      <div className="container-fluid px-0">
        <div className="row g-0 align-items-center">
          {/* Columna izquierda */}
          <div className="col-lg-6 hero-left px-5 py-5">
            <div className="hero-eyebrow d-inline-flex align-items-center gap-2 mb-3">
              <span className="eyebrow-dot"></span>
              <span className="eyebrow-text">Stock verificado · Bogotá</span>
            </div>

            <h1 className="hero-title mb-3">
              Hardware usado,
              <span className="hero-title-accent d-block">
                calidad garantizada.
              </span>
            </h1>

            <p className="hero-subtitle mb-4">
              Cada pieza pasa por inspección técnica antes de llegar a tus
              manos. Compra con confianza, recibe lo que ves.
            </p>

            <div className="d-flex align-items-center gap-3 flex-wrap mb-4">
              <a href="#productos" className="btn btn-hero-main">
                Ver productos →
              </a>
              <a href="/contact" className="btn btn-hero-sec">
                ¿Cómo verificamos?
              </a>
            </div>

            <div className="hero-trust-row d-flex gap-4 pt-3">
              <div className="trust-item">
                <span className="trust-num">+1.200</span>
                <span className="trust-label d-block">piezas vendidas</span>
              </div>
              <div className="trust-item">
                <span className="trust-num">98%</span>
                <span className="trust-label d-block">
                  clientes satisfechos
                </span>
              </div>
              <div className="trust-item">
                <span className="trust-num">30 días</span>
                <span className="trust-label d-block">garantía mínima</span>
              </div>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="col-lg-6 hero-right d-flex align-items-center justify-content-center py-5">
            <div className="cards-stack position-relative">
              {/* Tarjeta trasera */}
              <div className="product-card-hero card-back position-absolute">
                <div className="pcard-img d-flex align-items-center justify-content-center mb-2">
                  <i className="bi bi-gpu-card pcard-icon"></i>
                </div>
                <span className="pcard-cat">GPU</span>
                <p className="pcard-name">RTX 3060 12GB</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="pcard-price">$850.000</span>
                  <span className="pcard-badge">Verificado</span>
                </div>
              </div>

              {/* Tarjeta delantera */}
              <div className="product-card-hero card-front position-absolute">
                <div className="pcard-img d-flex align-items-center justify-content-center mb-2">
                  <i className="bi bi-cpu pcard-icon"></i>
                </div>
                <span className="pcard-cat">Procesadores</span>
                <p className="pcard-name">Ryzen 7 7800X3D</p>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="pcard-price">$1.200.000</span>
                  <span className="pcard-badge">Verificado</span>
                </div>
              </div>

              {/* Badge flotante */}
              <div className="verified-float d-flex align-items-center gap-2 position-absolute">
                <div className="vf-icon d-flex align-items-center justify-content-center">
                  <i className="bi bi-patch-check-fill vf-check-icon"></i>
                </div>
                <div>
                  <p className="vf-title mb-0">Inspección técnica</p>
                  <p className="vf-sub mb-0">Probado antes de vender</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
