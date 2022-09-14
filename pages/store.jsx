import Link from 'next/link';
import Layout from '../components/Layout';
import List from '../components/List';

export const Store = ({ guitars }) => {
   console.log(guitars);
   return (
      <Layout page='Virtual Store'>
         <main className='container'>
            <h1 className='heading'>Collection </h1>
            <List guitars={guitars} />
         </main>
      </Layout>
   );
};

export async function getServerSideProps() {
   const url = `${process.env.API_URL_GUITARS}`;
   const resp = await fetch(url);
   const guitars = await resp.json();
   return {
      props: { guitars: guitars.data },
   };
}

export default Store;
