import React, { Fragment } from 'react';
import Head from 'next/head';

import { getPostByIdSaga } from '@store/posts/saga';

import UpdatePostPageContent from '@pages-content/update-post';
import BaseLayout from '@components/layouts/BaseLayout';
import Header from '@components/Header';


const UpdatePostPage = ({ id }) => (
  <Fragment>
    <Head>
      <title>Pet blog update post</title>
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
      <UpdatePostPageContent id={id} />
    </BaseLayout>
  </Fragment>
);

UpdatePostPage.getInitialProps = async (ctx) => {
  const { id } = ctx.query;

  await Promise.all([
    ctx.store.runSaga(getPostByIdSaga, id).toPromise(),
  ]);

  return {
    id,
  };
};

export default UpdatePostPage;

