import Image from 'next/image';
import { useState } from 'react';
import Layout from '../../components/Layout';
import styles from '../../styles/Guitar.module.css';

const Product = ({ guitar, addCart }) => {
   const [quantity, setQuantity] = useState(1);
   const { description, image, name, price } = guitar[0].attributes;
   const handleSubmit = (e) => {
      e.preventDefault();
      if (quantity < 1) {
         alert('This is not valid');
         return;
      }

      const guitarSelected = {
         id: guitar[0].id,
         image: image.data.attributes.url,
         name,
         price,
         quantity,
      };
      addCart(guitarSelected);
   };

   return (
      <Layout page={`Gutiar ${name}`}>
         <article className={styles.guitar}>
            <Image
               layout='responsive'
               width={180}
               height={350}
               src={image.data.attributes.url}
               alt={`Image entry ${name} `}
            />
            <div className={styles.container}>
               <h3>{name}</h3>
               <p className={styles.description}>{description}</p>
               <p className={styles.price}>${price}</p>
               <form className={styles.form} onSubmit={handleSubmit}>
                  <label>Qty</label>
                  <select
                     value={quantity}
                     onChange={(e) => setQuantity(parseInt(e.target.value))}>
                     <option value=''>-- Selected ---</option>
                     <option value='1'>1</option>
                     <option value='2'>2</option>
                     <option value='3'>3</option>
                  </select>
                  <input type='submit' value='Add to cart' />
               </form>
            </div>
         </article>
      </Layout>
   );
};
/* Url query is coming from the file name to make it dynamic */
export async function getServerSideProps({ query: { url } }) {
   const urlGuitar = `http://localhost:1337/api/guitars?[filters][url]=${url}&populate[image][fields][1]=url`;
   const resp = await fetch(urlGuitar);
   const guitar = await resp.json();
   return { props: { guitar: guitar.data } };
}

export default Product;
