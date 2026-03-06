import React from 'react';

import styles from './homepage.module.css';
import BlogPostList from '@/components/BlogPostList';
import Spinner from '@/components/Spinner';
import { BLOG_TITLE } from '@/constants';

function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.mainHeading}>
        Latest Content:
      </h1>

      <React.Suspense fallback={<Spinner />}>
        <BlogPostList />
      </React.Suspense>
    </div>
  );
}

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript"
}

export default Home;
