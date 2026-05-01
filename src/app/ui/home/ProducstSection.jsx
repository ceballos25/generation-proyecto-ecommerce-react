import ProductCard from './ProductCard';

const ProductsSection = () => {
  const hardcodedCategories = ['CPU', 'Laptop', 'Mesa', 'Periférico', 'Otro'];
  const hardcodedProducts = [
    {
      "id": "1",
      "name": "Laptop Zephyrus M16",
      "brand": "Asus ROG",
      "price": 8500000,
      "status": "Usado",
      "stock": 3,
      "category": "Laptop Gamer",
      "description": "Intel Core i9-13900H, RTX 4070, 32GB RAM, Pantalla Nebula HDR.",
      "image": "https://images.pexels.com/photos/19012059/pexels-photo-19012059.jpeg",
      "isActive": true
    },
    {
      "id": "2",
      "name": "Tarjeta de Video RTX 3060",
      "brand": "EVGA",
      "price": 1400000,
      "status": "Usado",
      "stock": 3,
      "category": "GPU",
      "description": "12GB GDDR6, excelente estado, nunca usada para minería.",
      "image": "https://images.pexels.com/photos/32728404/pexels-photo-32728404.jpeg",
      "isActive": true
    },
    {
      "id": "3",
      "name": "Procesador Ryzen 7 7800X3D",
      "brand": "AMD",
      "price": 2100000,
      "status": "Nuevo",
      "stock": 10,
      "category": "Procesadores",
      "description": "El mejor procesador para gaming, arquitectura Zen 4, socket AM5.",
      "image": "https://images.pexels.com/photos/33798628/pexels-photo-33798628.jpeg",
      "isActive": true
    },
    {
      "id": "4",
      "name": "Monitor Odyssey G7",
      "brand": "Samsung",
      "price": 2800000,
      "status": "Nuevo",
      "stock": 4,
      "category": "Monitores",
      "description": "27 pulgadas, curvo 1000R, 240Hz, 1ms, resolución QHD.",
      "image": "https://images.pexels.com/photos/12252924/pexels-photo-12252924.jpeg",
      "isActive": true
    },
    {
      "id": "5",
      "name": "Teclado Mecánico G915 TKL",
      "brand": "Logitech G",
      "price": 750000,
      "status": "Usado",
      "stock": 2,
      "category": "Periféricos",
      "description": "Teclado inalámbrico de bajo perfil con switches táctiles.",
      "image": "https://images.pexels.com/photos/28842075/pexels-photo-28842075.jpeg",
      "isActive": true
    },
    {
      "id": "6",
      "name": "Placa Base Z790 Aorus Elite",
      "brand": "Gigabyte",
      "price": 1600000,
      "status": "Nuevo",
      "stock": 6,
      "category": "Mainboards",
      "description": "Socket LGA1700 para Intel 13ra y 14ta gen, soporte DDR5.",
      "image": "https://images.pexels.com/photos/7596370/pexels-photo-7596370.jpeg",
      "isActive": true
    },
    {
      "id": "7",
      "name": "Memoria RAM Vengeance RGB",
      "brand": "Corsair",
      "price": 550000,
      "status": "Nuevo",
      "stock": 15,
      "category": "RAM",
      "description": "Kit 32GB (2x16GB) DDR5 6000MHz CL36.",
      "image": "https://images.pexels.com/photos/34338596/pexels-photo-34338596.jpeg",
      "isActive": true
    },
    {
      "id": "8",
      "name": "Fuente de Poder RM850x",
      "brand": "Corsair",
      "price": 600000,
      "status": "Usado",
      "stock": 5,
      "category": "Fuentes de Poder",
      "description": "80 Plus Gold, completamente modular, incluye cables originales.",
      "image": "https://images.pexels.com/photos/35147159/pexels-photo-35147159.jpeg",
      "isActive": true
    },
    {
      "id": "9",
      "name": "SSD NVMe 980 Pro 1TB",
      "brand": "Samsung",
      "price": 480000,
      "status": "Nuevo",
      "stock": 20,
      "category": "Almacenamiento",
      "description": "PCIe 4.0 NVMe M.2, velocidades de hasta 7000 MB/s.",
      "image": "https://images.pexels.com/photos/28666524/pexels-photo-28666524.jpeg",
      "isActive": true
    },
    {
      "id": "10",
      "name": "Gabinete H9 Flow",
      "brand": "NZXT",
      "price": 950000,
      "status": "Nuevo",
      "stock": 10,
      "category": "Chasis",
      "description": "Diseño de doble cámara, excelente flujo de aire y vista panorámica.",
      "image": "https://images.pexels.com/photos/36614464/pexels-photo-36614464.jpeg",
      "isActive": true
    },
    {
      "id": "12",
      "name": "Monitor 27 165hz 1080p",
      "brand": "Xiaomi",
      "description": "Monitor Xiaomi 27 165hz 1080P como nuevo",
      "price": 450000,
      "stock": 2,
      "category": "Monitores",
      "image": "https://images.pexels.com/photos/2585916/pexels-photo-2585916.jpeg",
      "isActive": true
    },
    {
      "id": "13",
      "name": "Camara IP TAPO C200",
      "brand": "TP-LINK",
      "price": 130000,
      "stock": 20,
      "category": "Camaras de seguridad",
      "description": "Camara refurbished 2k ip con guardado en la nube",
      "image": "https://images.pexels.com/photos/13072973/pexels-photo-13072973.jpeg",
      "isActive": true
    },
    {
      "id": "LyHjIxMgQII",
      "name": "mouse",
      "brand": "mouse",
      "price": 10000,
      "stock": 20,
      "category": "mouse",
      "description": "mouse",
      "image": "https://images.pexels.com/photos/20509993/pexels-photo-20509993.jpeg",
      "isActive": false
    },
    {
      "id": "M5iguNoUe8U",
      "name": "procesador i7 7700k",
      "brand": "intel",
      "price": 1300000,
      "stock": 1,
      "category": "procesadores",
      "description": "procesador ",
      "image": "https://images.pexels.com/photos/34353877/pexels-photo-34353877.jpeg",
      "isActive": true
    }
  ];
  return (
    <section className="filters-section container-fluid px-4 px-md-5 stock-container" id="productos">

      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4">
        <h2 className="section-title mb-0">Productos</h2>
        <div className="filter-pills d-flex flex-wrap gap-2" id="categoryFilters">
          <button className="filter-pill active" data-category="all">Todos</button>
          {/* Categorías generadas dinámicamente */}
          {hardcodedCategories.map((cat) => (
            <button key={cat} className="filter-pill" data-category={cat}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de tarjetas */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-4 g-4" id="productsGrid">
        {/* Skeleton loaders mientras carga */}
        {hardcodedProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Estado vacío */}
      <div className="empty-state d-none" id="emptyState">
        <i className="bi bi-box-seam"></i>
        <p>No hay productos en esta categoría.</p>
      </div>

    </section>
  );
};

export default ProductsSection;