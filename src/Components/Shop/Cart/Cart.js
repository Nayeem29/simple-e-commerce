import React from 'react';
import './Cart.css';

const Cart = ({ cart }) => {

  let price = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    shipping = shipping + product.shipping;
    price = price + product.price * quantity;
  }

  const tax = parseFloat((price * 0.1).toFixed(2));
  const grandTotal = price + shipping + tax;
  return (
    <div className="cart">
      <h3>Order Summary</h3>
      <div className='order'>
        <p>Selected items: {quantity}</p>
        <p>Total Price: {price}</p>
        <p>Shipping Charge: {shipping}</p>
        <p>Tax: {tax}</p>
      </div>
      <h3>Grand Total: {grandTotal}</h3>
    </div>
  );
};

export default Cart;