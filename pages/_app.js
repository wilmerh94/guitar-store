import '../styles/normalize.css';
import '../styles/globals.css';
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
   const [cart, setCart] = useState([]);

   useEffect(() => {
      const cartLS = JSON.parse(localStorage.getItem('cart')) ?? [];
      setCart(cartLS);
   }, []);

   useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
   }, [cart]);

   const addCart = (product) => {
      if (cart.some((item) => item.id === product.id)) {
         console.log('duplicate product');
         const cartUpdated = cart.map((item) => {
            if (item.id === product.id) {
               item.quantity = product.quantity;
            }
            return item;
         });
         setCart(cartUpdated);
      } else {
         console.log('New product');
         setCart([...cart, product]);
      }
   };

   const updateQuantity = (product) => {
      const cartUpdated = cart.map((item) => {
         if (item.id === product.id) {
            item.quantity = product.quantity;
         }
         return item;
      });
      setCart(cartUpdated);
   };

   const deleteItem = (id) => {
      const cartUpdated = cart.filter((item) => item.id !== id);
      /* filter give you a new array that the elements are different than the item.id and id */
      setCart(cartUpdated);
   };
   return (
      <Component
         {...pageProps}
         cart={cart}
         addCart={addCart}
         updateQuantity={updateQuantity}
         deleteItem={deleteItem}
      />
   );
}

export default MyApp;
