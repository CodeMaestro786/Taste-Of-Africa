import React from 'react';
import products from '../data';
import ProductCard from '../components/ProductCard';

function Shop() {
  return (
    <section>
      <h2>Shop Products</h2>
      <div style={gridStyle}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '20px'
};

export default Shop;
