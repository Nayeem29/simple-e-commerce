import React, { useEffect, useState } from 'react';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('products.json')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, []);

  const handleAddToCart = (product) => {
    // console.log(product);
    const newCart = [...cart, product]
    setCart(newCart);
  }
  return (
    <div className='shop'>
      <div className="product-container">
        {
          products.map(product => <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          >
          </Product>)
        }
      </div>
      <div className="cart-container">
        <p>This is cart area</p>
        <p>Selected Item number:{cart.length}</p>
      </div>
    </div>
  );
};

export default Shop;