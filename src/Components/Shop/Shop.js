import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../Utilities/CustomHooks/useCart';
// import useProducts from '../../Utilities/CustomHooks/useProducts';
import { addToDb, } from '../../Utilities/FakeDB';
import Cart from './Cart/Cart';
import Product from './Product/Product';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCart();
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(10);

  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${page}&count=${count}`)
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        setProducts(data);
      });
  }, [page, count]);

  useEffect(() => {
    fetch('http://localhost:5000/productCount')
      .then(res => res.json())
      .then(data => {
        const count = data.count;
        const pages = Math.ceil(count / 10);
        setPageCount(pages);
      });
  }, [])

  const handleAddToCart = (selectedProduct) => {
    addToDb(selectedProduct._id);
    let newCart = [];
    const exist = cart.find(product => product._id === selectedProduct._id);
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct]
      setCart(newCart);
    } else {
      const rest = cart.filter(product => product._id !== selectedProduct._id);
      exist.quantity += 1;
      newCart = [...rest, exist];
    }
    // const newCart = [...cart, SelectedProduct];
    setCart(newCart);
  }
  return (
    <>
      <div className='shop'>
        <div className="product-container">
          {
            products.map(product => <Product
              key={product._id}
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
      <div className="pagination-btn">
        {
          [...Array(pageCount).keys()].map(
            number => <button
              onClick={() => setPage(number)}
              className={`pagination ${(page === number) ? 'selected' : ''} `}>{number + 1}</button>
          )
        }
        {
          <select onChange={e => setCount(e.target.value)}>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        }
      </div>
    </>
  );
};

export default Shop;