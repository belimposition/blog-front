import React, { Fragment } from 'react';
import Head from 'next/head';

import { getPostByIdSaga } from '@store/posts/saga';

import PostPageContent from '@pages-content/post';
import BaseLayout from '@components/layouts/BaseLayout';
import Header from '@components/Header';



const PostPage = ({ id }) => (
  <Fragment>
    <Head>
      <title>Pet blog post</title>
      <meta
        name='description'
        content=''
      />
      <meta
        name='keywords'
        content=''
      />
    </Head>
    <BaseLayout header={<Header />}>
      <PostPageContent id={id} />
    </BaseLayout>
  </Fragment>
);

PostPage.getInitialProps = async (ctx) => {
  const { id } = ctx.query;

  await Promise.all([
    ctx.store.runSaga(getPostByIdSaga, id).toPromise(),
  ]);

  return {
    id,
  };
};

export default PostPage;

