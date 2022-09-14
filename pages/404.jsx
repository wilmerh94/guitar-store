import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import styles from '../styles/NotFound.module.css';
const NotFound = () => {
   return (
      <Layout>
         <div className={styles.not_found}>
            <h1 className='heading'>Page not found</h1>
            <Link href='/'>Back to Main</Link>
         </div>
      </Layout>
   );
};

export default NotFound;
