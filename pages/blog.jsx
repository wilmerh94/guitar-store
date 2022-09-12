import Link from 'next/link';
import Layout from '../components/Layout';

export const Blog = () => {
   return (
      <Layout page='Virtual Blog'>
         <h1>From Blog</h1>
         <Link href='/'>Go to Main</Link>
      </Layout>
   );
};

export default Blog;
