import Link from 'next/link';
import Course from '../components/Course';
import Layout from '../components/Layout';
import List from '../components/List';
import ListBlog from '../components/ListBlog';

export default function Home({ guitars, courses, blog }) {
   return (
      <Layout page='main' guitar={guitars[3]}>
         <main className='container'>
            <h1 className='heading'>From main</h1>

            <List guitars={guitars} />
         </main>
         <Course courses={courses} />
         <section className='container'>
            <ListBlog entries={blog} />
         </section>
      </Layout>
   );
}
export async function getServerSideProps() {
   const urlGuitars = `http://localhost:1337/api/guitars?populate=*`;
   const urlCourses = `http://localhost:1337/api/course?populate=*`;
   const urlBlog =
      'http://localhost:1337/api/blogs?populate[image][fields][1]=url&pagination[start]=0&pagination[limit]=3';

   const [resGuitars, resCourses, resBlog] = await Promise.all([
      fetch(urlGuitars),
      fetch(urlCourses),
      fetch(urlBlog),
   ]);

   const [guitars, courses, blog] = await Promise.all([
      resGuitars.json(),
      resCourses.json(),
      resBlog.json(),
   ]);
   return {
      props: { guitars: guitars.data, courses: courses.data, blog: blog.data },
   };
}
