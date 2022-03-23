import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

  let price = 0;
  let shipping = 0;
  // console.log(cart);
  for (const product of cart) {
    price = price + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((price * 0.1).toFixed(2));
  const grandTotal = price + shipping + tax;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <div className='order'>
        <p>Selected items: {cart.length}</p>
        <p>Total Price: {price}</p>
        <p>Shipping Charge: {shipping}</p>
        <p>Tax: {tax}</p>
      </div>
      <h3>Grand Total: {grandTotal}</h3>
    </div>
  );
};

export default Cart;