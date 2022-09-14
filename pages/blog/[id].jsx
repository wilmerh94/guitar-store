import { useRouter } from 'next/router';

export const EntryBlog = ({ entry }) => {
   console.log(entry);
   return (
      <div>
         <h1>Entry Blog</h1>
      </div>
   );
};
export async function getStaticPaths() {
   const url = `http://localhost:1337/api/blogs?populate=*`;
   const response = await fetch(url);
   const entries = await response.json();
   const paths = entries.data.map((entry) => ({ params: { id: entry.id.toString() } }));
   return {
      paths,
      fallback: false,
   };
}

export async function getStaticProps({ params: { id } }) {
   const url = `http://localhost:1337/api/blogs/${id}?populate=*`;
   const response = await fetch(url);
   const entry = await response.json();
   console.log(entry);

   return {
      props: {
         entry,
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
