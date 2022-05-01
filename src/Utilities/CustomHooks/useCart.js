import { useEffect, useState } from "react"
import { getShoppingCart } from "../FakeDB";

const useCart = () => {
  const [cart, setCart] = useState([]);
  const storedCart = getShoppingCart();
  useEffect(() => {
    const savedCart = [];
    console.log(storedCart);
    const keys = Object.keys(storedCart);
    console.log(keys);
    fetch('http://localhost:5000/productBykeys', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(keys)
    })
      .then(res => res.json())
      .then(products => {
        for (const id in storedCart) {
          const addedProduct = products.find(product => product._id === id);
          if (addedProduct) {
            addedProduct.quantity = storedCart[id];
            savedCart.push(addedProduct);
          }
        }
        setCart(savedCart);
      })
  }, []);

  return [cart, setCart];
}

export default useCart;