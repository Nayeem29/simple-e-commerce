import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Utilities/CustomHooks/useCart';
import useProducts from '../../Utilities/CustomHooks/useProducts';
import { addToDb, getShoppingCart } from '../../Utilities/FakeDB';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  /*
    useEffect(() => {
      const selectedProduct = getShoppingCart();
      let selectedCart = [];
      for (const id in selectedProduct) {
        const matchedProduct = products.find(product => product.id === id);
  
        if (matchedProduct) {
          const quantity = selectedProduct[id];
          matchedProduct.quantity = quantity;
          // console.log(matchedProduct);
          selectedCart.push(matchedProduct);
          // console.log(selectedCart);
        }
      }
      setCart(selectedCart);
    }, [products]);
  */
  const handleAddToCart = (selectedProduct) => {
    addToDb(selectedProduct.id);
    let newCart = [];
    const exist = cart.find(product => product.id === selectedProduct.id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct]
      setCart(newCart);
    } else {
      const rest = cart.filter(product => product.id !== selectedProduct.id);
      exist.quantity += 1;
      newCart = [...rest, exist];
    }
    // const newCart = [...cart, SelectedProduct];
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
        <Cart cart={cart}>

          <Link to='/order'>
            <button>Review Order</button>
          </Link>

        </Cart>
      </div>
    </div>
  );
};

export default Shop;