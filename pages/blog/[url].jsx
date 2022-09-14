import Image from 'next/image';
import Layout from '../../components/Layout';
import { formatDate } from '../../helpers';
import styles from '../../styles/Entry.module.css';

export const EntryBlog = ({ entry }) => {
   console.log(entry.attributes);
   const { title, publishedAt, image, content } = entry[0].attributes;
   return (
      <Layout>
         <main className='container'>
            <h1 className='heading'>{title}</h1>
            <article className={styles.entry}>
               <Image
                  layout='responsive'
                  width={800}
                  height={800}
                  src={image.data?.attributes.url}
                  alt={`Image entry ${title} `}
               />
               <div className={styles.container}>
                  <p className={styles.date}>{formatDate(publishedAt)}</p>
                  <p className={styles.text}>{content}</p>
               </div>
            </article>
         </main>
      </Layout>
   );
};
export async function getStaticPaths() {
   const url = `${process.env.API_URL}`;
   const response = await fetch(url);
   const entries = await response.json();
   const paths = entries.data.map((entry) => ({ params: { url: entry.attributes.url } }));
   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params: { url } }) {
   const urlBlog = `http://localhost:1337/api/blogs?[filters][url]=${url}&populate[image][fields][1]=url`;
   // const urlBlog = `http://localhost:1337/api/blogs?filters[url]=${url}`;
   const response = await fetch(urlBlog);
   const entry = await response.json();

   return {
      props: {
         entry: entry.data,
      },
   };
}

export default EntryBlog;

// export async function getServerSideProps({ params: { id } }) {
//    const url = `http://localhost:1337/api/blogs/${id}?populate=*`;
//    const response = await fetch(url);
//    const entry = await response.json();
//    console.log(entry);

//    return {
//       props: {
//          entry,
//       },
//    };
// }
