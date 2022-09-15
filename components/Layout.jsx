import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';
export const Layout = ({ children, page, guitar }) => {
   return (
      <div>
         <Head>
            <title>Guitar Store {page}</title>
            <meta name='description' content='Guitar Store online' />
            {/* <link rel='preconnect' href='https://fonts.googleapis.com' />
            <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
            <link
               href='https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap'
               rel='stylesheet'
            /> */}
         </Head>
         <Header guitar={guitar} />
         {children}
         <Footer />
      </div>
   );
};

Layout.defaultProps = { guitar: null };

export default Layout;
