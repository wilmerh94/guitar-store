import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css';

export default function Home() {
   return (
      <Layout page='main'>
         <title>Guitar Store - Main</title>
         <meta name='description' content='Generated by create next app' />
         <link rel='icon' href='/favicon.ico' />

         <main className={styles.main}>
            <h1>From main</h1>
            <Link href='/about'>Go to About</Link>
         </main>
      </Layout>
   );
}
