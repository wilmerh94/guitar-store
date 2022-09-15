import styles from '../styles/Courses.module.css';

const Course = ({ courses }) => {
   const { title, content, image } = courses.attributes;

   return (
      <section>
         <div className={`container ${styles.grid}`}>
            <div className={styles.content}>
               <h2 className='heading'>{title}</h2>
               <p className={styles.text}>{content}</p>
               <a href='#' className={styles.link}>
                  More Info
               </a>
            </div>
         </div>

         <style jsx>{`
            section {
               padding: 10rem 0;
               margin-top: 10rem;
               background-image: linear-gradient(
                     to right,
                     rgb(0 0 0 / 0.65),
                     rgb(0 0 0 / 0.7)
                  ),
                  url(${image.data.attributes.url});
               background-size: cover;
               background-position: 50%;
            }
         `}</style>
      </section>
   );
};

export default Course;
