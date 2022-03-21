import React from 'react';
import './Product.css';

const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { name, img, ratings, price, seller } = product;
  // console.log(name, price);
  return (
    <div className='product'>
      <img src={img} alt="" />
      <div className='product-info'>
        <p className='product-name'>{name}</p>
        <p className='product-price'>Price: ${price}</p>
        <div className='small-part'>
          <p><small>Manufacture: {seller}</small></p>
          <p><small>Rating: {ratings} Star</small></p>
        </div>
      </div>
      <button onClick={() => handleAddToCart(product)} className='product-cart'>
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;