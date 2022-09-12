import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
export const Layout = ({ children, page }) => {
   return (
      <div>
         <Head>
            <title>Guitar Store {page}</title>
            <meta name='description' content='Guitar Store online' />
         </Head>
         <Header />
         {children}
         <Footer />
      </div>
   );
};

export default Layout;
