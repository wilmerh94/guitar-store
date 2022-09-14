import Link from 'next/link';
import Layout from '../components/Layout';
import List from '../components/List';
import styles from '../styles/Home.module.css';

export default function Home({ guitars }) {
   return (
      <Layout page='main'>
         <main className='container'>
            <h1 className='heading'>From main</h1>
            <Link href='/about'>Go to About</Link>
            <List guitars={guitars} />
         </main>
      </Layout>
   );
}
export async function getServerSideProps() {
   const url = `${process.env.API_URL_GUITARS}`;
   const resp = await fetch(url);
   const guitars = await resp.json();
   return {
      props: { guitars: guitars.data },
   };
}
