import React from 'react';

import { getBlogPostList } from '@/helpers/file-helpers';

import BlogSummaryCard from '@/components/BlogSummaryCard';

async function BlogPostList() {
  const data = await getBlogPostList();

  return (
    data.map(item => (
        <BlogSummaryCard
          key={item.slug}
          slug={item.slug}
          title={item.title}
          abstract={item.abstract}
          publishedOn={item.publishedOn}
        />
      )
    )
  );
}

export default BlogPostList;
