import Link from 'next/link';
import Layout from '../components/Layout';

export const Store = () => {
   return (
      <Layout page='Virtual Store'>
         <h1>From Store</h1>
         <Link href='/'>Go to Main</Link>
      </Layout>
   );
};

export default Store;
