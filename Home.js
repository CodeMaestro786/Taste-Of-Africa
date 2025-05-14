import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h2>Welcome to TASTE OF AFRICA</h2>
      <p>Authentic international African goods for the global market.</p>
      <Link to="/shop" style={linkStyle}>Browse Our Store</Link>
    </section>
  );
}

const linkStyle = {
  display: 'inline-block',
  marginTop: '20px',
  padding: '10px 20px',
  background: '#F9A825',
  color: '#fff',
  borderRadius: '5px'
};

export default Home;
