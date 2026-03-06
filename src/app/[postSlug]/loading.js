import Spinner from "@/components/Spinner";

import styles from './postSlug.module.css';

export default function Loading() {
  return (
    <div className={styles.loading}>
      <Spinner />
    </div>
  );
}