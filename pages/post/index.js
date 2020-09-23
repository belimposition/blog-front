import React, { Fragment } from 'react';
import Head from 'next/head';

import BaseLayout from '@components/layouts/BaseLayout';
import Header from '@components/Header';

const PostMainPage = () => (
  <Fragment>
    <Head>
      <title>Pet blog PostMainPage</title>
      <meta
        name='description'
        content=''
      />
      <meta
        name='keywords'
        content=''
      />
    </Head>
    <BaseLayout header={<Header />} />
  </Fragment>
);

PostMainPage.getInitialProps = async (ctx) => {
  // await Promise.all([]);

  return {};
};

export default PostMainPage;

