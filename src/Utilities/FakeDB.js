//Add data to the local storage...
const addToDb = (id) => {

  let shoppingCart = getShoppingCart();

  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

  //add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = (quantity) + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));

}

//Get shopping Cart
const getShoppingCart = () => {
  let shoppingCart = {};
  const storedCart = localStorage.getItem('shopping-cart');
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
}

//Remove data from cart
const removeFromDb = (id) => {
  const storedCart = localStorage.getItem('shopping-cart')
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
  }
}

//Delete Cart completely
const deleteCart = () => {
  localStorage.removeItem('shopping-cart');
}

export {
  addToDb,
  removeFromDb,
  deleteCart,
  getShoppingCart
}