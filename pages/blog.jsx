import Layout from '../components/Layout';
import ListBlog from '../components/ListBlog';
export const Blog = ({ entries }) => {
   return (
      <Layout page='Virtual Blog'>
         <main className='container'>
            <ListBlog entries={entries} />
         </main>
      </Layout>
   );
};

/* Requesting API with next
This function make a build the page in every request every time you get to this page  */
export async function getStaticProps() {
   /* Using this function I will be able to see the data just on my Command Prop */
   const url = 'http://localhost:1337/api/blogs?populate=*';
   const response = await fetch(url);
   const resps = await response.json();
   const entries = resps.data;
   return {
      /* This return has to be pass as a props in my component to be able
      to see it in the client side */
      props: {
         entries,
      },
   };
}

export default Blog;

/* Requesting API with next
This function make a build the page in every request every time you get to this page  */
// export async function getServerSideProps() {
//    /* Using this function I will be able to see the data just on my Command Prop */
//    const url = 'http://localhost:1337/api/blogs';
//    const response = await fetch(url);
//    const res = await response.json();
//    console.log(res);

//    return {
//       /* This return has to be pass as a props in my component to be able
//       to see it in the client side */
//       props: {
//          res,
//       },
//    };
// }

/*  This is after build the project, it will create a HTML file that
i will be read it every time the client visit this page
Use this just if the data is static*/
// export async function getStaticProps() {
//    /* Using this function I will be able to see the data just on my Command Prop */
//    const url = 'http://localhost:1337/api/blogs';
//    const response = await fetch(url);
//    const res = await response.json();
//    console.log(res);

//    return {
//       /* This return has to be pass as a props in my component to be able
//       to see it in the client side */
//       props: {
//          res,
//       },
//    };
// }
