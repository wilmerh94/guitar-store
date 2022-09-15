import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import styles from '../styles/Cart.module.css';
const Cart = ({ cart, updateQuantity, deleteItem }) => {
   const [total, setTotal] = useState(0);

   useEffect(() => {
      const totalCart = cart.reduce(
         (total, product) => total + product.quantity * product.price,
         0,
      );
      setTotal(totalCart);
   }, [cart]);

   return (
      <Layout page={'Cart Shopping'}>
         <h1 className='heading'>Cart</h1>
         <main className={`${styles.content} container`}>
            <div className={styles.cart}>
               <h2>Items</h2>
               {cart.length === 0
                  ? 'Cart empty'
                  : cart.map((product) => (
                       <div key={product.id} className={styles.product}>
                          <div>
                             <Image
                                layout='responsive'
                                width={250}
                                height={480}
                                src={product.image}
                                alt={product.name}
                             />
                          </div>
                          <div>
                             <p className={styles.name}>{product.name}</p>
                             <div className={styles.quantity}>
                                <p>QTY: {product.quantity}</p>
                                <select
                                   value={product.quantity}
                                   className={styles.select}
                                   onChange={(e) =>
                                      updateQuantity({
                                         quantity: e.target.value,
                                         id: product.id,
                                      })
                                   }>
                                   <option value='0'>0</option>
                                   <option value='1'>1</option>
                                   <option value='2'>2</option>
                                   <option value='3'>3</option>
                                </select>
                             </div>
                             <p className={styles.price}>
                                $<span>{product.price}</span>
                             </p>
                             <p className={styles.subtotal}>
                                Subtotal: <span>${product.price * product.quantity}</span>
                             </p>
                          </div>
                          <button
                             onClick={() => deleteItem(product.id)}
                             type='button'
                             className={styles.delete}>
                             X
                          </button>
                       </div>
                    ))}
            </div>
            <div className={styles.resume}>
               {total > 0 ? (
                  <>
                     <h3>Cart Summary</h3>
                     <p>Total: {total}</p>
                  </>
               ) : (
                  <p>You do not have any product</p>
               )}
            </div>
         </main>
      </Layout>
   );
};

export default Cart;
