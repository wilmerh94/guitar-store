import Entry from './Entry';
import styles from '../styles/Blog.module.css';

const ListBlog = ({ entries }) => {
   return (
      <div>
         <h2 className='heading'>Blog</h2>
         <div className={styles.blog}>
            {entries.map((entry) => (
               <Entry entry={entry.attributes} key={entry.id} id={entry.id} />
            ))}
         </div>
      </div>
   );
};

export default ListBlog;
