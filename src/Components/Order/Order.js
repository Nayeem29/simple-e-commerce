import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../Utilities/CustomHooks/useCart';
import useProducts from '../../Utilities/CustomHooks/useProducts';
import { removeFromDb } from '../../Utilities/FakeDB';
import Cart from '../Shop/Cart/Cart';
import './Order.css';
import ReviewOrder from './Review-Order/ReviewOrder';

const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  const navigate = useNavigate();

  const handleRemoveProduct = (shoeProduct) => {
    console.log(shoeProduct);
    const rest = cart.filter(cartShoe => cartShoe._id !== shoeProduct._id);
    setCart(rest);
    removeFromDb(shoeProduct._id);
  }
  return (
    <div>
      <div className="shop">
        <div className="review-items-container">
          {
            cart.map(shoe => <ReviewOrder
              handleRemoveProduct={handleRemoveProduct}
              shoe={shoe}></ReviewOrder>)
          }
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <button onClick={() => navigate('/inventory')}>Proceed Checkout</button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Order;