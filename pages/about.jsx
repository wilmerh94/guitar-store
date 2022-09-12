import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';
import styles from '../styles/About.module.css';
export const About = () => {
   return (
      <Layout page='About'>
         <main className='container'>
            <h2 className='heading'>About</h2>
            <div className={styles.container}>
               <Image
                  layout='responsive'
                  src='/nosotros.jpg'
                  width={600}
                  height={450}
                  alt=''
               />
               <div className=''>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam
                     porro ea molestiae dolorum quibusdam qui voluptates totam in? Itaque
                     ducimus harum maxime quasi voluptates impedit maiores earum quae
                     nemo.
                  </p>
               </div>
            </div>
         </main>
      </Layout>
   );
};

export default About;
