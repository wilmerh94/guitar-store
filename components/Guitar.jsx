import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Guitar.module.css';
const Guitar = ({ guitar }) => {
   const { description, name, price, url, image } = guitar;
   return (
      <div className={styles.guitar}>
         <Image
            src={image.data.attributes?.url}
            width={180}
            height={350}
            alt={`Guitar image ${name}`}
         />
         <div className={styles.container}>
            <h3>{name}</h3>
            <p className={styles.description}>{description}</p>
            <p className={styles.price}>${price}</p>
            <Link href={`/guitars/${url}`}>
               <a className={styles.link}>Details</a>
            </Link>
         </div>
      </div>
   );
};

export default Guitar;
