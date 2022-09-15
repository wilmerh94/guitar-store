import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Header.module.css';

export const Header = ({ guitar }) => {
   const router = useRouter();
   return (
      <header className={styles.header}>
         <div className='container'>
            <div className={styles.navbar}>
               <div>
                  <Link href='/'>
                     <a>
                        <Image
                           width={400}
                           height={100}
                           src='/logo.svg'
                           alt='Image Logo'
                        />
                     </a>
                  </Link>
               </div>
               <nav className={styles.navigation}>
                  <Link href='/'>Main</Link>
                  <Link href='/about'>About</Link>
                  <Link href='/blog'>Blog</Link>
                  <Link href='/store'>Store</Link>
                  <Link href='/cart'>
                     <a>
                        <Image
                           layout='fixed'
                           width={30}
                           height={25}
                           src='/carrito.png'
                           alt='Cart Image'
                        />
                     </a>
                  </Link>
               </nav>
            </div>
            {guitar && (
               <div className={styles.model}>
                  <h2>Model {guitar.attributes.name}</h2>
                  <p> {guitar.attributes.description}</p>
                  <p className={styles.price}>$ {guitar.attributes.price}</p>
                  <Link href={`/guitars/${guitar.attributes.url}`}>
                     <a className={styles.link} href=''>
                        See more
                     </a>
                  </Link>
               </div>
            )}
         </div>

         {router.pathname === '/' && (
            <div className={styles.guitar}>
               <Image
                  layout='fixed'
                  width={500}
                  height={1200}
                  src='/header_guitarra.png'
                  alt='Image Header'
               />
            </div>
         )}
      </header>
   );
};

export default Header;
