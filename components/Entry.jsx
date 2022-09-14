import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '../helpers';
import styles from '../styles/Entry.module.css';
export const Entry = ({ entry, id }) => {
   console.log(entry);
   const { title, summary, image, publishedAt } = entry;
   return (
      <article className={styles.card}>
         <Image
            priority='true'
            src={image.data?.attributes.url}
            alt={`image blog ${image.data?.attributes.title}`}
            width={800}
            height={600}
            layout='responsive'
            className={styles.image}
         />
         <div className={styles.container}>
            <h3>{title}</h3>
            <p className={styles.summary}>{summary}</p>
            <Link href={`/blog/${id}`}>
               <a className={styles.link}>Read More</a>
            </Link>
            <div className={styles.information}>
               <p className={styles.date}>{formatDate(publishedAt)}</p>
            </div>
         </div>
      </article>
   );
};
export default Entry;
