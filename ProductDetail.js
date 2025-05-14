import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data';

function ProductDetail() {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <p>Product not found.</p>;

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%' }} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>${product.price.toFixed(2)}</strong></p>
      <button style={buttonStyle}>Add to Cart</button>
    </div>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  background: '#F9A825',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default ProductDetail;
