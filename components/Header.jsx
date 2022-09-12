import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export const Header = () => {
   return (
      <header className={styles.header}>
         <div className='container'>
            <div className={styles.navbar}>
               <div>
                  <Link href='/'>
                     <Image width={400} height={100} src='/logo.svg' alt='Image Logo' />
                  </Link>
               </div>
               <nav className={styles.navigation}>
                  <Link href='/'>Main</Link>
                  <Link href='/about'>About</Link>
                  <Link href='/blog'>Blog</Link>
                  <Link href='/store'>Store</Link>
               </nav>
            </div>
         </div>
      </header>
   );
};

export default Header;